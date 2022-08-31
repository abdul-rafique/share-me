import React from "react";
import PostActionButton from "./PostActionButton";
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function PostActions() {
  return (
    <div className="flex justify-between gap-3 my-1">
      <PostActionButton
        text="Likes"
        leadingIcon={<IoHeartOutline size={20} />}
      />
      <PostActionButton
        text="Comment"
        leadingIcon={<IoChatboxOutline size={20} />}
      />
      <PostActionButton
        text="Share"
        leadingIcon={<IoShareSocialOutline size={20} />}
      />
    </div>
  );
}

export default PostActions;
