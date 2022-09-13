import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const Tags = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      <LabelOutlinedIcon
        className="btn relative"
        onClick={() => setModalOpen(true)}
      />
      {isModalOpen ? (
        <div
          ref={ref}
          className="flex space-x-2 p-2 b bg-white border-2 border-gray-300 absolute rounded-md shadow-lg"
        >
          <input className="max-w-[8rem] outline-none border-[1px] border-gray-500 rounded-md"></input>
          <button className="text-gray-900">Add</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
