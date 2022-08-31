import React from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import FormTextArea from "../Form/FormTextArea";
import NewPostModal from "./NewPostModal";

function NewPost() {
  return (
    <div className="w-full p-5 rounded-lg drop-shadow shadow bg-white">
      <h4 className="mb-2 text-black/80 text-lg font-semibold">
        Post Something
      </h4>

      <hr className="mb-3 border-t-black/25" />

      <div className="flex justify-between items-center gap-2">
        <Link
          to="/"
          className="p-2 rounded-full ring-2 ring-accent-light hover:ring-accent-dark text-accent-light hover:text-accent-dark"
        >
          <IoPerson size={28} />
        </Link>

        <FormTextArea
          rows={1}
          placeholder="What's in your mind?"
          extraCssClass="border-none rounded-full bg-accent/10"
        />

        <NewPostModal />
      </div>
    </div>
  );
}

export default NewPost;
