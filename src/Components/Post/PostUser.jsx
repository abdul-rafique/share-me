import React from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";

function PostUser({ extraCssClasses }) {
  return (
    <div className={`relative flex items-center gap-3 ${extraCssClasses}`}>
      <Link
        to="/"
        className="p-2 rounded-full ring-2 ring-accent-light hover:ring-accent-dark text-accent-light hover:text-accent-dark"
      >
        <IoPerson size={28} />
      </Link>
      <div className="flex flex-col">
        <span className="font-semibold text-black/80 leading-none">
          Post User
        </span>
        <small className="text-black/50">07 June at 10:33 AM</small>
      </div>
    </div>
  );
}

export default PostUser;
