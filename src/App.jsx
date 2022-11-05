import React, { useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { login, logout } from './features/auth/auth.slice'
import { authenticationSelector } from './features/auth/auth.selector'
import { ClipLoader } from 'react-spinners'
import { IoConstructOutline } from 'react-icons/io5'

import Layout from './Layout'
import NewsFeed from './Routes/NewsFeed'
import Login from './Routes/Login'
import SignUp from './Routes/Signup'
import ForgotPass from './Routes/ForgotPass'

import User from './Routes/User/index'
import Posts from './Routes/User/Posts'
import About from './Routes/User/About'
import NotFound404 from './Routes/NotFound404'
import PrivateRoutes from './Components/PrivateRoutes'
import { setUser } from './features/user/user.slice'

function App() {
    const isAuthenticated = useSelector(authenticationSelector)
    const dispatch = useDispatch()

    const refresh = useCallback(
        async (user) => {
            const userData = { ...user, isLoggedIn: true }
            return dispatch(login(userData))
        },
        [dispatch]
    )

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(setUser(user))
                }
                if (user && !isAuthenticated) {
                    const userData = { ...user, isLoggedIn: true }

                    return dispatch(login(userData))
                    // return await refresh(userData)
                }
                if (!user && !isAuthenticated) {
                    dispatch(logout())
                }
            })
        }
        unsubscribe()
    })

    if (isAuthenticated === undefined) {
        return (
            <div className="w-full h-screen flex justify-center items-center text-2xl font-semibold">
                <ClipLoader color="#4464ad" size={48} />
            </div>
        )
    }

    return (
        <Router>
            <div className="flex justify-center items-center gap-2 p-2 bg-warning/70 ">
                <IoConstructOutline size={24} />
                Project is under development.
            </div>
            <Routes>
                {/* Protected Routes */}
                <Route element={<PrivateRoutes />}>
                    <Route element={<Layout />}>
                        <Route index element={<NewsFeed />} />
                        <Route path="/profile" element={<User />}>
                            <Route index element={<Posts />} />
                            <Route path="about" element={<About />} />
                        </Route>
                    </Route>
                </Route>

                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPass />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Router>
    )
}

export default App
