import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <div className="flex gap-4 uppercase">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center">
        <span className="bg-amber-500 px-2 py-1 text-2xl rounded-lg">IMDb</span>
        <span className="hidden sm:inline">Clone</span>
      </div>
    </div>
  );
};

export default Header;
