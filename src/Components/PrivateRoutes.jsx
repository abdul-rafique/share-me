import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { login, logout } from '../features/user/userSlice'
import { ClipLoader } from 'react-spinners'

function PrivateRoutes({ component: RouteComponent, ...otherProps }) {
    const isUser = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user))
                setIsLoading(false)
            } else {
                dispatch(logout())
                setIsLoading(false)
            }
        })
    }, [])

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center text-2xl font-semibold">
                <ClipLoader color="#4464ad" size={48} />
            </div>
        )
    }

    return !!isUser ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
