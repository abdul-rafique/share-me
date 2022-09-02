import React from "react";
import Post from "../../Components/Post/Post";

function Posts() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg bg-white shadow shadow-gray-light overflow-hidden px-5 py-3">
        <h5 className="text-lg font-semibold text-black/80">Posts</h5>
      </div>

      <Post imgId={2} />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
