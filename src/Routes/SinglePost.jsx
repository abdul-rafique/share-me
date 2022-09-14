import React from 'react'

import PostUser from '../Components/PostUser'
import PostActions from '../Components/PostActions'
import NewComment from '../Components/NewComment'
import SinglePostMediaSlider from '../Components/SinglePostMediaSlider'

function SinglePost() {
    return (
        <div className="flex flex-col gap-3 p-5 rounded-lg shadow bg-white">
            {/* Post Topbar */}
            <div className="flex justify-between items-start">
                <PostUser />
            </div>

            {/* Post Content */}
            <div className="flex flex-col justify-center items-center gap-3">
                <p className=" leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, maxime eligendi exercitationem fuga corporis delectus
                    nulla, labore dolore numquam possimus quos laborum iste
                    maiores laudantium. Rem quia assumenda architecto
                    voluptates!
                </p>

                <SinglePostMediaSlider />
            </div>

            <div>
                <hr className="border-t-gray" />

                {/* Post Actions (Likes, Comments, Shares, Saved) */}
                <PostActions />

                <hr className="border-t-gray" />
            </div>
            {/* Post Direct Comment */}
            <NewComment />
        </div>
    )
}

export default SinglePost
