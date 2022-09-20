import React from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const ColorPallete = ({ color, changeColor }) => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  const colors = [
    "#FFFFFF",
    "#89F5E8",
    "#F4C047",
    "#EA6FD8",
    "#75CA9A",
    "#4BC3F1",
    "#F9EC35",
    "#A45EE2",
  ];
  return (
    <div>
      <PaletteOutlinedIcon
        className="btn relative"
        onClick={() => setModalOpen(true)}
      />

      {isModalOpen ? (
        <div
          ref={ref}
          className="flex max-w-[11rem] flex-wrap absolute z-10 border-2 border-gray-300 bg-white rounded-md"
        >
          {colors.map((newcolor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: newcolor }}
                className={`
            w-10 h-10 rounded-full border-2 m-[1px] border-gray-300`}
                onClick={() => {
                  changeColor(newcolor);
                }}
              ></button>
            );
          })}
        </div>
      ) : (
        " "
      )}
    </div>
  );
};
