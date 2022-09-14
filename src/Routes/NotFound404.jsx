import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'

function NotFound404() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img
                src="/page-not-found.gif"
                alt="404_page_not-found"
                className="w-1/3"
            />
            <PrimaryButton as="link" to="/">
                Back to home
            </PrimaryButton>
        </div>
    )
}

export default NotFound404
