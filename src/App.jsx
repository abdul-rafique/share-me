import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'

import Layout from './Layout'
import NewsFeed from './Routes/NewsFeed'
import Login from './Routes/Login'
import SignUp from './Routes/Signup'
import ForgotPass from './Routes/ForgotPass'

import User from './Routes/User/index'
import Posts from './Routes/User/Posts'
import About from './Routes/User/About'
import NotFound404 from './Routes/NotFound404'

function App() {
    const isUser = false
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        index
                        element={
                            isUser ? <NewsFeed /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/profile" element={<User />}>
                        <Route index element={<Posts />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPass />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Router>
    )
}

export default App
