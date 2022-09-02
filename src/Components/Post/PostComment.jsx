import React from "react";
import UserAvatar from "../UserAvatar";

function Comment() {
  return (
    <div className="flex items-start gap-3">
      <UserAvatar color="accent" padding={2} />
      <div className="flex flex-col items-start">
        <p className="p-2 text-sm rounded-lg bg-accent/10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          eaque
        </p>
        <div className="text-black/70 text-sm font-semibold flex gap-2">
          <span className="cursor-pointer hover:underline hover:underline-offset-1 hover:text-accent">
            Like
          </span>
          <span className="cursor-pointer hover:underline hover:underline-offset-1 hover:text-accent">
            Reply
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
