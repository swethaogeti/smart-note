import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quillEditor.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["link", "image", "video"],
  ],
};

export const QuillEditor = ({ value, setValue }) => {
  return (
    <ReactQuill
      modules={modules}
      placeholder="Take a note..."
      value={value}
      onChange={setValue}
    />
  );
};
