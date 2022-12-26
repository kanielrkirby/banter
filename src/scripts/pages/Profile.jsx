import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { AuthContext } from '../utils/Auth'

const Profile = () => {
	const { user } = useContext(AuthContext)
	const [profileLoading, setProfileLoading] = useState(true)
	const { id } = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		if (user.uid === id) navigate('/my-profile', { replace: true })
	}, [])
	async function getProfile() {
		const u = await getDoc(doc(db, 'users', id))
		if (!u.exists()) return setProfileLoading(false)
	}
	return (
		<div className="profile">
			<h1>Profile</h1>
			{(profileLoading && <p>Loading...</p>) || <div>hey</div>}
		</div>
	)
}

export default Profile
