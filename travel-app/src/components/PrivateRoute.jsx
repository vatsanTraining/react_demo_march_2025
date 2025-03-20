import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

     //const user =sessionStorage.getItem('currentUser')

    const isAuthenticated = true   //logic 
    return (
        isAuthenticated ? children : <Navigate to="/" />

    )
}

export default PrivateRoute