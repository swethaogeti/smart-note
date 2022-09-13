import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const Priority = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      <SubjectOutlinedIcon className="btn" onClick={() => setModalOpen(true)} />
      {isModalOpen ? (
        <div
          ref={ref}
          className="flex  flex-col p-1  bg-white border-2 border-gray-300 absolute rounded-md shadow-lg"
        >
          <div className="flex space-x-2 justify-start">
            <input type="radio" id="low"></input>
            <label for="low">Low</label>
          </div>
          <div className="flex space-x-1 justify-start">
            <input type="radio" id="medium"></input>
            <label for="medium">Medium</label>
          </div>
          <div className="flex space-x-1 justify-start ">
            <input type="radio" id="high"></input>
            <label for="high">High</label>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
