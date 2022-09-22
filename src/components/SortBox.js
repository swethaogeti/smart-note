import React from "react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import SortIcon from "@mui/icons-material/Sort";
export const SortBox = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  const [newTag, setNewTag] = useState("");
  return (
    <div>
      <SortIcon
        className="btn !text-[2rem] relative"
        onClick={() => setModalOpen(true)}
      />

      {isModalOpen ? (
        <div
          ref={ref}
          className="  flex p-1 right-4 space-x-3 bg-gray-100 border-2 border-gray-300 absolute rounded-md shadow-lg"
        >
          <div>
            <div className="flex space-x-1 justify-start">
              <input type="radio" id="low" name="priority"></input>
              <label className="font-bold">Low</label>
            </div>
            <div className="flex space-x-1 justify-start">
              <input type="radio" id="medium" name="priority"></input>
              <label className="font-bold">Medium</label>
            </div>
            <div className="flex space-x-1 justify-start ">
              <input type="radio" id="high" name="priority"></input>
              <label className="font-bold">High</label>
            </div>
          </div>

          <div>
            <div className="flex space-x-1 justify-start">
              <input type="checkbox" id="low" name="priority"></input>
              <label className="font-bold">Old</label>
            </div>
            <div className="flex space-x-1 justify-start">
              <input type="checkbox" id="medium" name="priority"></input>
              <label className="font-bold">New</label>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
