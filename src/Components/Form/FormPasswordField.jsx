import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

function FormPasswordField({
    identity,
    label,
    error,
    register,
    ...otherProps
}) {
    const [showPass, setShowPass] = useState(false)

    const handlePassPrivacy = () => {
        return showPass ? setShowPass(false) : setShowPass(true)
    }

    return (
        <>
            <label htmlFor={`#${identity}`} className="text-gray-dark">
                {label || 'Password'}
            </label>
            <div
                className={`group flex border-gray rounded focus-within:border-accent focus-within:ring-accent ${
                    error && 'border-danger ring-1 ring-danger shake '
                }`}
            >
                <input
                    type={showPass ? 'text' : 'password'}
                    id={identity}
                    className={`block w-full rounded-l border border-gray focus:border-accent focus:ring-accent ${
                        error && 'border-danger ring-1 ring-danger'
                    }`}
                    {...register}
                    {...otherProps}
                />
                <button
                    type="button"
                    className={`px-3 text-accent bg-accent/10 border-r border-y rounded-r ring-transparent border-gray focus:border-l ring-1 group-focus-within:border-accent group-focus-within:ring-accent ${
                        error && 'border-danger'
                    }`}
                    onClick={handlePassPrivacy}
                >
                    {showPass ? (
                        <IoEyeOutline size={20} />
                    ) : (
                        <IoEyeOffOutline size={20} />
                    )}
                </button>
            </div>
            {error && <small className="text-danger">{error.message}</small>}
        </>
    )
}

export default FormPasswordField
