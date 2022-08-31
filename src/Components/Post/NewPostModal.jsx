import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  IoImagesOutline,
  IoCloseOutline,
  IoDuplicateOutline,
} from "react-icons/io5";

import PostUser from "./PostUser";
import FormTextArea from "../Form/FormTextArea";
import FormFileField from "../Form/FormFileField";

function NewPostModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [postMedia, setPostMedia] = useState([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleFileField = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
        .map((file) => ({
          data: file,
          url: URL.createObjectURL(file),
        }))
        .concat(e.target.files);

      setPostMedia((prevMedia) => prevMedia.concat(fileArray));

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const closePostMedia = () => {
    setPostMedia([]);
  };

  const renderPostMedia = () => {
    const countExtraMedia = () => {
      return postMedia.length > 5 && postMedia.length - 5;
    };

    return postMedia.map(
      (file, index) =>
        index <= 5 && (
          <div
            key={index}
            className="relative max-h-36 flex items-center justify-center overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={file.url}
              className="shrink-0 min-w-full min-h-full"
              alt={file.data.name}
            />
            {index >= 5 && (
              <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                <span className="text-2xl text-white font-semibold">
                  +{countExtraMedia()}
                </span>
              </div>
            )}
          </div>
        )
    );
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button className="p-2 cursor-pointer" onClick={openModal}>
          <IoImagesOutline
            size={28}
            className="text-dark/40 cursor-pointer transition-colors hover:text-primary"
          />
        </button>
      </div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-dark/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center">
              <Transition.Child>
                <Dialog.Panel className="w-full md:w-[32rem] max-w-lg flex flex-col gap-2 p-3 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-dark/80 text-center p-3"
                  >
                    Create Post
                  </Dialog.Title>
                  <hr className="border-t-gray" />
                  <div className="flex justify-start">
                    <PostUser />
                  </div>
                  <form className="flex flex-col gap-5">
                    <FormTextArea
                      placeholder="What's in your mind, user?"
                      extraCssClass="border-none"
                      rows={4}
                    />

                    {postMedia.length === 0 && (
                      <FormFileField onChange={handleFileField} />
                    )}

                    {postMedia.length !== 0 && (
                      <div className="relative grid grid-cols-3 gap-3 p-3 rounded-md border border-gray">
                        <div className="col-span-3 flex justify-between items-center">
                          <label className="px-2 py-1 border border-gray rounded bg-white cursor-pointer font-semibold">
                            <span className="flex items-center gap-2">
                              <IoDuplicateOutline size={20} />
                              <span>Add Photos/Videos</span>
                            </span>
                            <input
                              type="file"
                              multiple
                              onChange={handleFileField}
                              className="hidden"
                            />
                          </label>
                          <button
                            type="button"
                            className="p-0.5 rounded-full shadow-md border border-gray bg-white  text-dark/80"
                            onClick={closePostMedia}
                          >
                            <IoCloseOutline size={20} />
                          </button>
                        </div>

                        {renderPostMedia(postMedia)}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full p-2 bg-primary text-white font-semibold rounded"
                    >
                      Post
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default NewPostModal;
