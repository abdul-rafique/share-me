import React from 'react'

function Alert({ children, type }) {
    return (
        <small
            className={`block px-3 py-2 mb-3 rounded 
            ${type === 'danger' && 'bg-danger/10 text-danger'} 
            ${type === 'success' && 'bg-success/10 text-success'}
            ${type === 'warning' && 'bg-warning/10 text-warning'}
            `}
        >
            {children}
        </small>
    )
}

export default Alert
