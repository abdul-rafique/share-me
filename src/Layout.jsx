import React from 'react'
import Navbar from './Components/Navbar'

import Container from './Components/Container'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout
