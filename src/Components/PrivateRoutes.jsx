import React, { useEffect, useCallback, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { authenticationSelector } from '../features/auth/auth.selector'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase.config'
import { login, logout } from '../features/auth/auth.slice'
import { ClipLoader } from 'react-spinners'

function PrivateRoutes({ component: RouteComponent, ...otherProps }) {
    const isAuthenticated = useSelector(authenticationSelector)
    // let navigate = useNavigate()

    // useEffect(() => {
    //     const unsubscribe = () => {
    //         setTimeout(() => {
    //             navigate('/login', { replace: true })
    //         }, 1000)
    //     }

    //     unsubscribe()
    // }, [isAuthenticated])

    // if (isAuthenticated === undefined) {
    //     return (
    //         <div className="w-full h-screen flex justify-center items-center text-2xl font-semibold">
    //             <ClipLoader color="#4464ad" size={48} />
    //         </div>
    //     )
    // } else {
    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
    // }
}

export default PrivateRoutes
