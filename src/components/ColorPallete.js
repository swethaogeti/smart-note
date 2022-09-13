import React from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const ColorPallete = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  const colors = [
    "bg-[#FFFFFF]",
    "bg-[#C6F8E5]",
    "bg-[#E4F2D5]",
    "bg-[#F5CDDE]",
    "bg-[#E2BEF1]",
    "bg-[#CCE1F2]",
    "bg-[#F9EC35]",
    "bg-[#FFFAF1]",
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
          {colors.map((item) => {
            return (
              <button
                className={`${item}
            w-10 h-10 rounded-full border-2 m-[1px] border-gray-300`}
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
