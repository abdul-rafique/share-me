import React from "react";
import { Outlet } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import UserAvatar from "../../Components/UserAvatar";
import UserInfoMenu from "../../Components/UserInfoMenu";

function User() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col w-full rounded-lg bg-white shadow shadow-gray-light">
        <div className="min-h-[4rem] max-h-56 flex items-center justify-center overflow-hidden rounded-t-lg">
          <img
            src={
              false
                ? "https://picsum.photos/id/1002/800"
                : "http://placehold.jp/32/ddd/999/800x400.jpg?text=Cover%20Image"
            }
            alt="cover_image"
            className="shrink-0 max-h-full max-w-full"
          />
        </div>
        <div className="relative">
          <div className="absolute -bottom-20 flex items-end justify-start gap-5 p-5">
            <UserAvatar size={72} color="accent" padding={5} />
            <div className="">
              <span className="block text-xl lg:text-2xl font-semibold text-black/80">
                Username
              </span>
              <span className="flex items-center text-sm text-gray-dark">
                <IoLocationOutline /> Karachi, Pakistan
              </span>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden px-2.5 py-4 mt-16">
          <hr className="mb-3 border-t-gray-light" />
          <UserInfoMenu />
        </div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default User;
