import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../utils/Auth'

const PrivateRoute = (props) => {
	const { user, loading } = useContext(AuthContext)
	return user ? props.element : loading ? <p>Loading</p> : <Navigate to="/login" />
}

export default PrivateRoute
