import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryButton(props) {
    const { as, children, block = false, link, ...otherProps } = props

    switch (as) {
        case 'submit':
            return (
                <button
                    type="submit"
                    className={`px-4 py-1.5 bg-accent text-white font-semibold border-transparent rounded border-2 hover:bg-accent-dark hover:text-white transition-colors duration-200 disabled:bg-accent/50 ${
                        block && 'w-full flex justify-center items-center'
                    }`}
                    {...otherProps}
                >
                    {children}
                </button>
            )

        case 'link':
            return (
                <Link
                    to={link || '/'}
                    className={`px-4 py-1.5 bg-accent text-white font-semibold border-transparent rounded border-2 hover:bg-accent-dark hover:text-white transition-colors duration-200 disabled:bg-accent/50 ${
                        block && 'w-full flex justify-center items-center'
                    }`}
                    {...otherProps}
                >
                    {children}
                </Link>
            )

        default:
            return (
                <button
                    type="button"
                    className={`px-4 py-1.5 bg-accent text-white font-semibold border-transparent rounded border-2 hover:bg-accent-dark hover:text-white transition-colors duration-200 disabled:bg-accent/50 ${
                        block && 'w-full flex justify-center items-center'
                    }`}
                    {...otherProps}
                >
                    {children}
                </button>
            )
    }
}

export default PrimaryButton
