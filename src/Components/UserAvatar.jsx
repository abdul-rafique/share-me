import React from "react";
import { IoPerson } from "react-icons/io5";

function UserAvatar({ color, size, padding }) {
  return (
    <span
      className={`flex items-center justify-center p-${padding} rounded-full ring-2 ring-${color} bg-white`}
    >
      <IoPerson size={size} className={`text-${color}`} />
    </span>
  );
}

export default UserAvatar;
