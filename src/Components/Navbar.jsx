import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import UserMenu from './UserMenu'

export default function Navbar({ isUser }) {
    return (
        <div className="fixed top-0 inset-x-0 z-20 px-5 py-2 flex justify-between items-center text-accent shadow bg-white">
            <Link to="/" className="text-2xl font-semibold">
                Logo
            </Link>

            {isUser ? (
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
    )
}
