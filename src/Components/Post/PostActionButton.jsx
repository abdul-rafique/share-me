import React from "react";

function PostActionButton({ leadingIcon, text }) {
  return (
    <button className="flex justify-center items-center gap-1.5 flex-1 px-2 py-2 rounded-lg hover:bg-accent/20">
      {leadingIcon}
      {text}
    </button>
  );
}

export default PostActionButton;
