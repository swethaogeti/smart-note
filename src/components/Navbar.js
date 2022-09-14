import { Avatar } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
import { SidebarMobileView } from "./SidebarMobileView";
export const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 bg-white shadow-sm ">
      <div className="flex max-w-full items-center justify-between mx-auto p-3 ">
        <div>
          <Link to="/">
            <h1 className="text-purple-500 text-[2rem] font-bold hidden md:block tracking-widest">
              SMARTY
            </h1>
          </Link>
          <Link to="/">
            <img
              src="https://img.icons8.com/external-filled-line-gradient-andi-nur-abdillah/64/000000/external-notes-morning-routine-filled-line-gradient-filled-line-gradient-andi-nur-abdillah.png"
              className="md:hidden w-12 h-12"
            />
          </Link>
        </div>
        <SidebarMobileView />
        <div className="flex space-x-2 items-center cursor-pointer flex-col">
          <Avatar></Avatar>

          <button className="text-purple-600 font-bold">LogOut</button>
        </div>
      </div>
    </div>
  );
};
