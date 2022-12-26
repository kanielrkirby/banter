import React, { useContext } from 'react'
import { AuthContext } from '../utils/Auth'

const GoogleButton = () => {
	const { googleSignIn, setLoading } = useContext(AuthContext)

	const handleGoogleSignIn = async (e) => {
		e.preventDefault()
		setLoading((prev) => prev + 1)
		await googleSignIn()
		setLoading((prev) => prev - 1)
	}
	return (
		<button
			className="flex gap-2 bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded-lg transition-colors duration-200"
			onClick={handleGoogleSignIn}
		>
			<svg className="h-full w-14 aspect-square">
				<use href="#google-icon" />
			</svg>
			<span className="font-bold whitespace-nowrap flex justify-center items-center">Sign in with Google</span>
		</button>
	)
}

export default GoogleButton
