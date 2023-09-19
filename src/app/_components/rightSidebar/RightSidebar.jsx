"use client";
// icons
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "../contacts/Contacts";
import { useSession } from "next-auth/react";

const RightSidebar = () => {
  const {data:session} = useSession();
  return (
    <div className="hidden md:inline-flex flex-col pt-4 ml-2 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contects</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Chamath Induwara"
        src={session?.user.image}
        status="offline"
      />
      <Contacts
        name="Chamath Induwara"
        src={session?.user.image}
        status="online"
      />
      <Contacts
        name="Chamath Induwara"
        src={session?.user.image}
        status="offline"
      />
    </div>
  );
};

export default RightSidebar;
