import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

function App() {
    const isUser = useSelector((state) => state.user.user)

    return (
        <Router>
            <Routes>
                {/* Protected Routes */}
                <Route element={<PrivateRoutes />}>
                    <Route element={<Layout isUser={isUser} />}>
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
