import React from "react";
import { QuillEditor } from "./QuillEditor/QuillEditor";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { Priority } from "./Priority";
import { ColorPallete } from "./ColorPallete";
import { Tags } from "./Tags";

export const TextEditor = () => {
  return (
    <div className="  sm:max-w-[500px] max-w-full sm:m-2 p-2 bg-white mx-4 flex flex-wrap 	shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      <div className="flex  justify-between items-center  w-full">
        <input
          placeholder="Title"
          className="flex-1 text-[1.2rem] 
          placeholder-gray-600
          sm:text-[1.5rem] font-[600] text-gray-700 outline-none"
        ></input>

        <PushPinOutlinedIcon className="cursor-pointer btn" />
      </div>
      <QuillEditor />
      <div className="flex  w-full justify-between items-center py-2">
        <div className="space-x-4 cursor-pointer flex ">
          <ColorPallete />
          <Tags />
          <Priority />
        </div>
        <div>
          <button className="bg-gray-700 text-white sm:p-1 w-10 sm:w-14 rounded-md font-[600] cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
