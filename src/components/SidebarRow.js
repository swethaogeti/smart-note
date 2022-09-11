import React from "react";
import { Link } from "react-router-dom";
const SidebarRow = ({ Icon, src, title, path }) => {
  return (
    <Link to={`/${path}`}>
      <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer ">
        {src && (
          <img
            src={src}
            className="w-10 h-10 rounded-full object-contain"
          ></img>
        )}
        {Icon && <Icon className=" text-gray-800 !text-[1.8rem] " />}
        <p className="hidden md:inline-flex font-bold text-gray-500 text-[1.1rem] ">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SidebarRow;
