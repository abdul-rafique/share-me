import React from "react";
import { IoDuplicateOutline } from "react-icons/io5";

function FormFileField({ onChange }) {
  return (
    <div className="w-full">
      <label className="flex justify-center w-full h-40 px-4 transition bg-white border-2 border-dark/80 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex flex-col items-center justify-center gap-2 text-dark/80">
          <IoDuplicateOutline size={36} />
          <span className="font-medium  ">
            Click to Attach Pictures/Videos
            {/* <span className="text-primary underline">browse</span> */}
          </span>
        </span>
        <input
          type="file"
          name="file_upload"
          className="hidden"
          onChange={onChange}
          multiple
        />
      </label>
    </div>
  );
}

export default FormFileField;
