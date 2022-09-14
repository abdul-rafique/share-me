import React from 'react'

function FormField(props) {
    const { type, identity, label, error, register, ...otherProps } = props

    return (
        <>
            <label htmlFor={`#${identity}`} className="text-gray-dark">
                {label}
            </label>
            <input
                type={type}
                className={`block w-full rounded border focus:border-accent focus:ring-accent ${
                    error
                        ? 'border-danger ring-1 ring-danger shake focus:border-danger focus:ring-danger'
                        : 'border-gray'
                }`}
                {...register}
                {...otherProps}
            />
            {error && <small className="text-danger">{error.message}</small>}
        </>
    )
}

export default FormField
