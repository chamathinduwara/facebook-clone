"use client";

import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { ImUsers } from "react-icons/im";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div
        className="flex items-center space-x-2 py-2 pl-2
             hover:bg-gray-200 rounded-l-xl cursor-pointer"
      >
        <Image
          src={session?.user.image}
          alt="Facebook Logo"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>

      <SidebarItem Icon={ImUsers} value="Friends"></SidebarItem>
      <SidebarItem Icon={MdGroups} value="Groups"></SidebarItem>
      <SidebarItem Icon={AiOutlineShop} value="Marketplace"></SidebarItem>
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch"></SidebarItem>
      <SidebarItem Icon={BsStopwatch} value="Memories"></SidebarItem>
      <SidebarItem Icon={MdOutlineExpandMore} value="See More"></SidebarItem>
    </div>
  );
};

export default Sidebar;
