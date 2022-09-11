import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w- h-[64px] flex justify-end shadow-lg shadow-[6px 2px 6px 0px #E5E5E54D] py-4">
      <div className="mx-4 py-2">
        <IoIosNotificationsOutline />
      </div>
      <div>|</div>
      <div className="flex px-4">
        <div className="w-[30px] h-[30px] bg-[#66A9DF] rounded-full text-white">
          <FaUser className="text-center mx-auto my-2" />
        </div>
        <div className="px-2 text-base text-[#303B54] mr-9">
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
