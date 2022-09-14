import React from 'react'

function FormTextArea({ label, type, placeholder, id, extraCssClass, rows }) {
    return (
        <>
            <label htmlFor={`#${id}`}>{label}</label>
            <textarea
                type={type}
                className={`block w-full border-gray focus:border-accent focus:ring-accent resize-none ${extraCssClass}`}
                placeholder={placeholder}
                id={id}
                rows={rows}
            ></textarea>
        </>
    )
}

export default FormTextArea
