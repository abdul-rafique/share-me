import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { authenticationSelector } from '../features/auth/auth.selector'
import { login, logout } from '../features/auth/auth.slice'
import { ClipLoader } from 'react-spinners'

function Refresh({ children }) {
    // const isAuthenticated = useSelector(authenticationSelector)
    // const dispatch = useDispatch()
    // const [isLodaing, setIsLoading] = useState(undefined)

    // const refresh = useCallback(async (user) => {
    //     const userData = { ...user, isLoggedIn: true }
    //     return dispatch(login(userData))
    // }, [])

    // useEffect(() => {
    //     console.log('App Refreshing...')
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user && !isAuthenticated) {
    //             console.log('Refreshing...')
    //             const userData = { ...user, isLoggedIn: true }
    //             // return await refresh(user)
    //             return dispatch(login(userData))
    //         }
    //         if (!user && !isAuthenticated) {
    //             console.log('Logging out...')
    //             dispatch(logout())
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //     setIsLoading(true)

    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 1000)
    // }, [])

    // if (isLodaing) {
    //     return (
    //         <div className="w-full h-screen flex justify-center items-center text-2xl font-semibold">
    //             <ClipLoader color="#4464ad" size={48} />
    //         </div>
    //     )
    // }

    return <>{children}</>
}

export default Refresh
