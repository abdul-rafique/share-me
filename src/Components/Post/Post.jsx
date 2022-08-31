import React, { useState, useEffect } from "react";
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

import PostUser from "./PostUser";
import PostActionButton from "./PostActionButton";
import NewComment from "../NewComment";
import PostDetailsDialog from "./PostDetailsDialog";

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const unsubscribe = () => {
      setImg1(Math.trunc(Math.random() * 100));
      setImg2(Math.trunc(Math.random() * 200));
      setImg3(Math.trunc(Math.random() * 300));
    };

    return unsubscribe();
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 p-5 rounded-lg drop-shadow shadow bg-white">
      {/* Post Topbar */}
      <div className="flex justify-between items-start">
        <PostUser />
      </div>

      {/* Post Content */}
      <div className="flex flex-col gap-3">
        <p className=" leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime
          eligendi exercitationem fuga corporis delectus nulla, labore dolore
          numquam possimus quos laborum iste maiores laudantium. Rem quia
          assumenda architecto voluptates!
        </p>

        <div className="relative max-h-64 lg:max-h-96 grid grid-rows-2 grid-cols-2 gap-3">
          <div className="row-span-2 flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={`https://picsum.photos/id/${img1}/400`}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={`https://picsum.photos/id/${img2}/400`}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={`https://picsum.photos/id/${img3}/400`}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
            <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
              <span className="text-xl text-white font-semibold">10+ More</span>
            </div>
          </div>
          <span
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <PostDetailsDialog isOpen={isModalOpen} closeModal={closeModal} />

      <div>
        <hr className="border-t-black/25" />

        {/* Post Actions (Likes, Comments, Shares, Saved) */}
        <div className="flex justify-between gap-3 my-1">
          <PostActionButton
            text="120k Likes"
            leadingIcon={<IoHeartOutline size={20} />}
          />
          <PostActionButton
            text="25 Comments"
            leadingIcon={<IoChatboxOutline size={20} />}
          />
          <PostActionButton
            text="231 Shares"
            leadingIcon={<IoShareSocialOutline size={20} />}
          />
        </div>

        <hr className="border-t-black/25" />
      </div>
      {/* Post Direct Comment */}
      <NewComment />
    </div>
  );
}

export default Post;
