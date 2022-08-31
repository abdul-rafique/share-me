import React from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import FormTextArea from "../Form/FormTextArea";
import NewPostModal from "./NewPostModal";

function NewPost() {
  return (
    <div className="w-full p-5 rounded-lg shadow bg-white">
      <h4 className="mb-2 text-dark/80 text-lg font-semibold">
        Post Something
      </h4>

      <hr className="mb-3 border-t-gray" />

      <div className="flex justify-between items-center gap-2">
        <Link to="/" className="p-2 rounded-full ring-2 ring-gray">
          <IoPerson size={28} className="text-gray" />
        </Link>

        <FormTextArea
          rows={1}
          placeholder="What's in your mind?"
          extraCssClass="border-none rounded-full bg-gray/20"
        />

        <NewPostModal />
      </div>
    </div>
  );
}

export default NewPost;
