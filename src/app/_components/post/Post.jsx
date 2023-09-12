import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-t-md p-4">
        <div className="flex space-x-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            alt="Profile Picture"
            className="rounded-full h-10 w-10"
          />
          <div>
            <p className="font-medium">Chamath</p>
            <p className="text-xs text-gray-500">08-09-2023</p>
          </div>
        </div>
        <p className="py-4">Post Name</p>
      </div>
      <div className="flex items-start justify-center h-60 md:h-96 bg-white">
        <Image
          src="https://st2.depositphotos.com/1560768/5550/i/950/depositphotos_55500797-stock-photo-woman-writing-url-on-blackboard.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>

      {/* Footer */}
      <div className="flex item-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray:100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4" size={20} />
          <p className="text-xs sm:text-base text-gray-500 font-medium">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray:100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" size={20} />
          <p className="text-xs sm:text-base text-gray-500 font-medium">
            Comment
          </p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray:100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" size={20} />
          <p className="text-xs sm:text-base text-gray-500 font-medium">
            Share
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
