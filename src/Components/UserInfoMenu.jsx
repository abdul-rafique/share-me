import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function UserInfoMenu() {
  const items = [
    { itemName: "Posts", url: "/profile" },
    { itemName: "About", url: "/profile/about" },
    // { itemName: "Friends", url: "/user/friends" },
  ];

  let activeClassNames =
    "font-semibold px-3 py-2 border-b-2 border-transparent border-accent text-accent";

  return (
    <ul className="flex items-center gap-2">
      {items.map((item, index) => (
        <li key={index} className="">
          <NavLink
            end
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? activeClassNames
                : "font-semibold text-gray-dark px-3 py-2 border-b-2 border-transparent"
            }
          >
            {item.itemName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default UserInfoMenu;
