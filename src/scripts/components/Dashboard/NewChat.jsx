import { getDoc, doc, collection, where, getDocs, query, addDoc } from '@firebase/firestore'
import React from 'react'
import { db } from '../../utils/firebase'
import { AuthContext } from '../../utils/Auth'

export default function NewChat({ updateChats }) {
	const { user } = React.useContext(AuthContext)
	const friendCodeRef = React.useRef()
	const [status, setStatus] = React.useState()
	const setError = (error) => setStatus({ error })
	const setPending = (pending) => setStatus({ pending })
	const setSuccess = (success) => setStatus({ success })

	const FormStatus = () => {
		let border, bg, text
		const { error, pending, success } = status
		const heading = error ? 'Error: ' : success ? 'Success: ' : ''
		const content = error || pending || success
		if (error) {
			border = 'border-red-500'
			bg = 'bg-red-100'
			text = 'text-red-500'
		} else {
			border = 'border-green-500'
			bg = 'bg-green-100'
			text = 'text-green-500'
		}
		return (
			<div className={`${bg} border-4 ${border} ${text} px-4 py-3 rounded relative`} role="alert">
				<strong className="font-bold">{heading}</strong>
				<span className="block sm:inline">{content}</span>
			</div>
		)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		if (!friendCodeRef.current.value) return setError('Please enter a friend code.')
		if (friendCodeRef.current.value.length !== 28) return setError('Please enter a valid friend code.')
		if (friendCodeRef.current.value === user.uid) return setError('Try making friends before talking to yourself.')
		setPending('Searching for user...')
		const friendRef = doc(db, 'users', friendCodeRef.current.value)

		const friendDoc = await getDoc(friendRef)
		if (!friendDoc.exists()) return setError('User not found. Please check your friend code and try again.')
		const friend = { ...friendDoc.data(), id: friendDoc.id }
		setPending('Checking if you already have a conversation...')
		const conversationSnapshot = await getDocs(
			query(
				collection(db, 'conversations'),
				where('users', 'array-contains', {
					displayName: user.displayName,
					id: user.uid,
				})
			)
		)
		for await (const conversation of conversationSnapshot.docs) {
			const users = conversation.data().users
			for (const user of users)
				if (user.id === friend.id) return setError('You already have a conversation with this user.')
		}
		setPending('Adding friend...')
		await addDoc(collection(db, 'conversations'), {
			users: [
				{ displayName: user.displayName, id: user.uid },
				{ displayName: friend.displayName, id: friend.id },
			],
		})
		await updateChats()
		setSuccess('Conversation created!')
	}
	return (
		<div className="w-full max-w-xl">
			{status && <FormStatus />}
			<form onSubmit={handleSubmit}>
				<div className="flex items-center border-b-2 border-primary-300 py-2">
					<input
						className="appearance-none bg-transparent border-none w-full text-accent mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Search"
						aria-label="Search"
						ref={friendCodeRef}
					/>
					<button
						className="flex-shrink-0 bg-primary-700 hover:brightness-150 transition-all duration-200 border-accent-100 text-md text-accent-100 border-2 py-1 px-2 rounded"
						type="submit"
					>
						Friend Code
					</button>
				</div>
			</form>
		</div>
	)
}
