import React from 'react'

function Container({ children }) {
    return (
        <div className="wrapper">
            <div className="md:w-3/4 lg:w-2/3 min-w-min max-w-5xl mx-auto px-3 py-10 flex flex-col gap-3">
                {children}
            </div>
        </div>
    )
}

export default Container
