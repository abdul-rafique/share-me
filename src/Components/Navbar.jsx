import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import UserMenu from "./UserMenu";

export default function Navbar({ isUser }) {
  return (
    <div className="fixed top-0 inset-x-0 z-20 px-5 py-1 flex justify-between items-center text-accent shadow-md backdrop-filter backdrop-blur">
      <Link to="/" className="text-2xl font-semibold">
        Logo
      </Link>

      {isUser === true ? (
        <UserMenu />
      ) : (
        // <div className="relative" onClick={handleDropdown}>
        //   <div className="flex items-center gap-1">
        //     <img
        //       src={process.env.PUBLIC_URL + "/user-light.png"}
        //       alt="user_avatar"
        //       className="w-8 rounded-full ring ring-primary ring-offset-2"
        //     />
        //     <div className="p-1.5 rounded-full ring-2 ring-white">
        //       <IoPerson size={24} />
        //     </div>
        //     <IoCaretDown size={20} />
        //   </div>

        //   {dropActive && (
        //     <div className="w-32 min-w-fit absolute top-full right-0 p-1.5 mt-1 bg-white shadow shadow-dark/20 text-dark rounded">
        //       <Link
        //         to="/profile"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Profile
        //       </Link>
        //       <hr className="my-1 border-t-dark/20" />
        //       <Link
        //         to="/posts"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         My Posts
        //       </Link>
        //       <Link
        //         to="/settings"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Settings
        //       </Link>
        //       <hr className="my-1 border-t-dark/20" />
        //       <Link
        //         to="/logout"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Logout
        //       </Link>
        //     </div>
        //   )}
        // </div>
        <div className="flex items-center gap-3">
          <PrimaryButton to="/login" as="link">
            Login
          </PrimaryButton>
          <SecondaryButton to="/signup" as="link">
            Signup
          </SecondaryButton>
        </div>
      )}
    </div>
  );
}
