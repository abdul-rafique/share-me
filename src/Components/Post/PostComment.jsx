import React from "react";
import UserAvatar from "../UserAvatar";

function Comment() {
  return (
    <div className="flex items-start gap-3">
      <UserAvatar padding={2} />
      <div className="flex flex-col items-start">
        <p className="p-2 text-sm rounded-lg bg-gray/20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          eaque
        </p>
        <div className="text-dark/80 text-sm font-semibold flex gap-2">
          <span className="cursor-pointer hover:underline hover:underline-offset-1">
            Like
          </span>
          <span className="cursor-pointer hover:underline hover:underline-offset-1">
            Reply
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
