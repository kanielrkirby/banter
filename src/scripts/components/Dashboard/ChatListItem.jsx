import React, { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { useNavigate } from 'react-router-dom'

function timeSince(date) {
	if (!date) return null
	const d = new Date() - date.toDate()
	return (
		(d < 1000
			? 'Just now'
			: d < 60000
			? `${Math.floor(d / 15000)} seconds`
			: d < 3600000
			? `${Math.floor(d / 60000)} minutes`
			: d < 86400000
			? `${Math.floor(d / 3600000)} hours`
			: d < 604800000
			? `${Math.floor(d / 86400000)} days`
			: d < 2419200000
			? `${Math.floor(d / 604800000)} weeks`
			: d < 29030400000
			? `${Math.floor(d / 2419200000)} months`
			: `${Math.floor(d / 29030400000)} years`) + ' ago'
	)
}

function getUsersTitle(users, uid) {
	let array = users.filter(({ id }) => id !== uid).map(({ displayName }) => displayName)
	if (array.length > 2) {
		array = array.slice(0, 2)
		return array.join(', ') + (users.length - 2 > 1 ? `, and ${users.length - 2} others` : ', and 1 other')
	}
	if (array.length === 1) return array[0]
	return array[0] + ' and ' + array[1]
}

export default function ChatListItem({ chat, user, updateChats }) {
	const navigate = useNavigate()
	const [lastMessage, setLastMessage] = useState(chat.lastMessage)
	const [timestamp, setTimestamp] = useState(timeSince(chat.lastMessage?.timestamp))
	let content, sender
	if (chat.lastMessage) {
		sender = chat.lastMessage.sender.id === user.uid ? 'You' : chat.lastMessage.sender.displayName
		content = chat.lastMessage.content
		if (content.length > 25) content = content.slice(0, 25) + '...'
	} else {
		content = 'No messages yet. Tap to start a conversation!'
	}
	const chatTitle = chat.title || 'Chat with ' + getUsersTitle(chat.users, user.uid)
	async function handleTrash() {
		await deleteDoc(doc(db, 'conversations', chat.id))
		await updateChats()
	}
	function handleLink() {
		navigate(`/chat/${chat.id}`)
	}
	return (
		<li
			onClick={handleLink}
			className="relative flex flex-col justify-between h-24 bg-primary-200 border-2 rounded-md p-2 cursor-pointer hover:brightness-125 transition-all duration-200"
		>
			<h2 className="font-bold">{chatTitle}</h2>
			<span onClick={handleTrash} className="absolute top-2 right-2">
				Trash
			</span>
			<div className="flex relative">
				<h3 className="font-bold opacity-70 pr-1">{sender ? sender + ':' : ''}</h3>
				<p className="opacity-70">{content}</p>
			</div>
			<span className="self-end text-xs opacity-70">{timestamp}</span>
		</li>
	)
}
