import React from "react";

function PostActionButton({ leadingIcon, text }) {
  return (
    <button className="flex justify-center items-center gap-1.5 flex-1 px-2 py-2 rounded-lg font-semibold text-black/80 hover:text-accent">
      {leadingIcon}
      {text}
    </button>
  );
}

export default PostActionButton;
