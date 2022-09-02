import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function FormPasswordField(props) {
  const [showPass, setShowPass] = useState(false);
  const { label, id } = props;

  const handlePassPrivacy = () => {
    return showPass ? setShowPass(false) : setShowPass(true);
  };
  return (
    <>
      <label htmlFor={`#${id}`} className="text-gray-dark">
        {label || "Password"}
      </label>
      <div className="flex">
        <input
          type={showPass ? "text" : "password"}
          className="block w-full rounded-l border-gray focus:border-accent focus:ring-accent"
          id={id}
          {...props}
        />
        <button
          type="button"
          className="px-3 text-accent bg-accent/10 border-r border-y border-gray rounded-r"
          onClick={handlePassPrivacy}
        >
          {showPass ? (
            <IoEyeOutline size={20} />
          ) : (
            <IoEyeOffOutline size={20} />
          )}
        </button>
      </div>
    </>
  );
}

export default FormPasswordField;
