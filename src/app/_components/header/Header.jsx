"use client";

import "./Header.css";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="maindiv">
      {/* {Left} */}
      <div className="leftdiv min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          className="rounded-full"
          alt="Facebook Logo"
          width={40}
          height={40}
        />
        <div className="flex items-center space-x-2 p-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <AiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* {Center} */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineHome className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineOndemandVideo className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineShop className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline className="mx-auto" size={25} />
          </div>
        </div>
      </div>
      {/* {Right} */}
      <div className="flex items-center justify-end mi-w-fit space-x-2">
        <Image
          src={session?.user.image}
          alt="Facebook Logo"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={signOut}
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name.split(" ")[0]}
        </p>
        <CgMenuGridO
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600
        rounded-full p-2 cursor-pointer hover:bg-gray-300"
          size={25}
        />
        <AiFillMessage
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600
        rounded-full p-2 cursor-pointer hover:bg-gray-300"
          size={25}
        />
        <AiFillBell
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600
        rounded-full p-2 cursor-pointer hover:bg-gray-300"
          size={25}
        />
        <MdOutlineExpandMore
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600
        rounded-full p-2 cursor-pointer hover:bg-gray-300"
          size={25}
        />
      </div>
    </div>
  );
};

export default Header;
