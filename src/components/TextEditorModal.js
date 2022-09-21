import React from "react";
import { TextEditor } from "./TextEditor";
import { useRef } from "react";

import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { useNotes } from "../contexts/NotesProvider";
import { useNavigate, useParams } from "react-router-dom";
export const TextEditorModal = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const { noteId } = useParams();
  console.log(noteId);
  useOnClickOutside(ref, () => navigate("/notes"));
  const { notes } = useNotes();
  const note = notes.find((note) => note._id === noteId);

  console.log(note);
  return (
    <div
      ref={ref}
      className=" w-fit h-fit top-0 bottom-0  mx-auto my-auto
        left-0 right-0 fixed flex justify-center items-center z-50 cursor-pointer
      "
    >
      <div ref={ref}>
        <TextEditor editorState={note} />
      </div>
    </div>
  );
};
