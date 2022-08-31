import React from "react";
import { Dialog } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import SinglePostMediaSlider from "./SinglePostMediaSlider";
import UserAvatar from "../UserAvatar";
import PostUser from "./PostUser";
import PostActions from "./PostActions";
import PostComment from "./PostComment";
import NewComment from "../NewComment";

function PostDetailsDialog({ isOpen, closeModal }) {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-30 h-full">
      <div className="fixed inset-0 bg-dark" aria-hidden="true">
        <div className="fixed inset-0 overflow-y-scroll lg:overflow-hidden">
          <Dialog.Panel className="w-full grid grid-cols-4 lg:min-h-screen lg:max-h-screen">
            {/* Dialog Left Section */}
            <section className="flex flex-col text-white md:col-span-4 lg:col-span-3">
              {/* Dialog Topbar */}
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="outline-none bg-white/20 rounded-full p-1 hover:bg-white/30"
                    onClick={closeModal}
                  >
                    <IoCloseOutline size={24} />
                  </button>
                  <Dialog.Title className="text-3xl">Logo</Dialog.Title>
                </div>
              </div>

              {/* Dialog Post Slider */}
              <div className="flex-1">
                <SinglePostMediaSlider />
              </div>
            </section>

            {/* Dialog Right Section */}
            <section className="lg:relative flex flex-col gap-3 pb-16 bg-white md:col-span-4 lg:col-span-1 lg:min-h-screen lg:max-h-screen">
              <div className="max-w-fit p-2 pb-0 self-end hidden lg:block">
                <UserAvatar color="dark" size={20} padding={2} />
              </div>

              <hr className="border-t-gray" />

              <div className="px-4">
                <PostUser />

                <p className="text-sm mt-1 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis fugiat earum id consequatur deleniti dicta minus
                  nesciunt.
                </p>

                <hr className="border-t-gray" />
                <PostActions />
                <hr className="border-t-gray" />
              </div>

              {/* Comments Section */}

              <div className="py-2 px-4 flex flex-col gap-2 overflow-y-scroll">
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
              </div>

              {/* New Comment */}

              <div className="fixed lg:absolute bottom-0 inset-x-0 bg-white p-3 shadow">
                <NewComment />
              </div>
            </section>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default PostDetailsDialog;
