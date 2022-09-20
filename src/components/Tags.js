import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useState, useRef } from "react";
import { useNotes } from "../contexts/NotesProvider";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const Tags = ({ tags, toggleTag }) => {
  console.log(tags);
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));
  const { uniqueTags, setUniqueTags } = useNotes();
  // console.log(uniqueTags);
  const [newTag, setNewTag] = useState("");
  return (
    <div>
      <LabelOutlinedIcon
        className="btn relative"
        onClick={() => setModalOpen(true)}
      />
      {isModalOpen ? (
        <div
          ref={ref}
          className="flex flex-col space-x-2 p-2  bg-white border-2 border-gray-300 absolute rounded-md shadow-lg"
        >
          <div className=" space-x-2">
            <input
              className="max-w-[8rem] outline-none border-[1px] border-gray-500 rounded-md"
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            ></input>
            <button
              className="rounded-md px-[.4rem] py-[.2rem] text-[.9rem] bg-gray-600 text-white font-[600]"
              onClick={() => {
                if (
                  !uniqueTags.find((tag) => tag === newTag) &&
                  newTag !== ""
                ) {
                  setUniqueTags([...uniqueTags, newTag]);
                }
                setNewTag("");
              }}
            >
              Add
            </button>
          </div>

          <div className=" flex flex-col p-1">
            {uniqueTags.length !== 0 &&
              uniqueTags.map((tag) => {
                return (
                  <div className="flex space-x-1" key={tag}>
                    <input
                      id={tag}
                      type="checkbox"
                      checked={tags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                    ></input>
                    <h4 className="font-semibold text-gray-800 ">{tag}</h4>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
