import React from 'react'
import { Link } from 'react-router-dom'
import { IoPerson } from 'react-icons/io5'

import FormTextArea from './Form/FormTextArea'

function NewComment() {
    return (
        <div className="flex justify-between items-center gap-2">
            <Link to="/" className="p-1.5 rounded-full ring-2 ring-accent">
                <IoPerson size={20} className="text-accent" />
            </Link>

            <FormTextArea
                rows={1}
                extraCssClass="border-none rounded-full bg-accent/10"
                placeholder="Write your comment..."
            />
        </div>
    )
}

export default NewComment
