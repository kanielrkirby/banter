import React from 'react'
import { collection, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../utils/firebase'
import { useParams } from 'react-router-dom'

function Chatroom({ user }) {
	const { conversationId } = useParams()
	const [messages, setMessages] = useState([])
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let unsubscribe
		if (conversationId) {
			unsubscribe = onSnapshot(
				collection(db, 'conversations', conversationId, 'messages'),
				orderBy('timestamp', 'asc'),
				{ limit: 25 },
				(snapshot) => {
					setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
					setLoading(false)
				}
			)
		}

		return () => unsubscribe && unsubscribe()
	}, [conversationId])

	const handleSendMessage = () => {
		if (conversationId) {
			addDoc(collection(db, 'conversations', conversationId, 'messages'), {
				sender: user.displayName,
				content: message,
				timestamp: serverTimestamp(),
			})
		}
	}

	return (
		<div className="chatroom">
			<div className="header">
				<button className="back-button">Back</button>
				<button className="settings-button">Settings</button>
			</div>
			<div className="message-stream">
				{loading && <p>Loading messages...</p>}
				{messages.map((message) => (
					<div className="message" key={message.id}>
						<p className="sender">{message.sender}</p>
						<p className="content">{message.content}</p>
						<p className="timestamp">{message.timestamp}</p>
					</div>
				))}
			</div>
			<div className="message-input">
				<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
				<button onClick={handleSendMessage}>Send</button>
			</div>
		</div>
	)
}

export default Chatroom
