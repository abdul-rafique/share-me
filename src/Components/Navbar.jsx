import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { authenticationSelector } from '../features/auth/auth.selector'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import UserMenu from './UserMenu'

export default function Navbar() {
    const isAuthenticated = useSelector(authenticationSelector)

    return (
        <div className="navbar sticky top-0 inset-x-0 z-20 shadow bg-white">
            <div className="flex justify-between items-center px-5 py-2 text-accent">
                <Link to="/" className="text-2xl font-semibold">
                    Logo
                </Link>

                {!!isAuthenticated ? (
                    <UserMenu />
                ) : (
                    <div className="flex items-center gap-3">
                        <PrimaryButton to="/login" as="link">
                            Login
                        </PrimaryButton>
                        <SecondaryButton to="/signup" as="link">
                            Signup
                        </SecondaryButton>
                    </div>
                )}
            </div>
        </div>
    )
}
