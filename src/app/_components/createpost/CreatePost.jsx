"use client";

import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

import Image from "next/image";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/features/postSlice";

const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const addImageToPost = (e) => {
    const render = new FileReader();
    if (e.target.files[0]) {
      render.readAsDataURL(e.target.files[0]);
      render.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        header: { Accept: "application/json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        dispatch(addPost(response.data));
        console.log(response.data);
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          alt="Facebook Logo"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            ref={inputRef}
            placeholder="What's on your mind?"
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly p-2">
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <HiOutlineVideoCamera className="text-red-500" size={20} />
          <p className="text-sm font-medium">Live Video</p>
        </div>

        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <IoMdPhotos className="text-green-500" size={20} />
          <p className="text-sm font-medium">Photo/Video</p>
          <input
            onChange={addImageToPost}
            hidden
            ref={hiddenFileInput}
            type="file"
            accept="image/*"
          />
        </div>

        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <BsEmojiSmile className="text-yellow-500" size={20} />
          <p className="text-sm font-medium">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
