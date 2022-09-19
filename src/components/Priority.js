import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const Priority = ({ priority, changePriority }) => {
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
            <input
              type="radio"
              id="low"
              name="priority"
              checked={priority && priority === "Low"}
              onChange={() => {
                changePriority("Low");
              }}
            ></input>
            <label>Low</label>
          </div>
          <div className="flex space-x-1 justify-start">
            <input
              type="radio"
              id="medium"
              name="priority"
              checked={priority && priority === "Medium"}
              onChange={() => {
                changePriority("Medium");
              }}
            ></input>
            <label>Medium</label>
          </div>
          <div className="flex space-x-1 justify-start ">
            <input
              type="radio"
              id="high"
              name="priority"
              checked={priority && priority === "High"}
              onChange={() => {
                changePriority("High");
              }}
            ></input>
            <label>High</label>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
