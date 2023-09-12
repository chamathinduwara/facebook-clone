import Image from "next/image";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
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
            placeholder="What's on your mind?"
          />
          <button hidden></button>
        </form>
      </div>
      <div className="flex justify-evenly p-2">
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <HiOutlineVideoCamera className="text-red-500" size={20} />
          <p className="text-sm font-medium">Live Video</p>
        </div>

        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <IoMdPhotos className="text-green-500" size={20} />
          <p className="text-sm font-medium">Photo/Video</p>
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
