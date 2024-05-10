import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";
import srn from "@/public/srn.jpg";

const Navbar = () => {
  return (
    <nav className="max-w-full flex px-5 py-3 bg-gray-700 text-white justify-between md:px-64  xl:px-96">
      <ul className="flex gap-10 items-center text-sm">
        <li className="cursor-pointer">Dashboard</li>
        <li className="hidden sm:inline-block cursor-pointer">Master Price</li>
        <li className="hidden sm:inline-block cursor-pointer">Custom Price</li>
        <li className="hidden sm:inline-block cursor-pointer">Calender</li>
        <li className="hidden sm:inline-block cursor-pointer">Reports</li>
      </ul>

      <div className="flex gap-5 items-center ">
        <FaBell className="cursor-pointer" />
        <Image
          src={srn}
          alt="logo"
          height={100}
          width={100}
          className="w-8 h-8 rounded-full border-2 border-opacity-30 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
