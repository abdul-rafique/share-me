import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";

function PostUser({ extraCssClasses }) {
  return (
    <div className={`relative flex items-center gap-3 ${extraCssClasses}`}>
      <UserAvatar size={28} />
      <div className="flex flex-col">
        <span className="font-semibold text-dark/80 leading-none">
          Post User
        </span>
        <small className="text-gray">07 June at 10:33 AM</small>
      </div>
      <Link to="/" className="absolute inset-0" />
    </div>
  );
}

export default PostUser;
