import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { TextEditor } from "../components/TextEditor";
import { useNotes } from "../contexts/NotesProvider";

export const HomePage = () => {
  const { notes } = useNotes();

  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center items-center mx-auto pt-5 pb-24">
          <TextEditor
            editorState={{
              title: "",
              color: "#FFFFFF",
              tags: [],
              priority: "Low",
              note: "",
            }}
          />
          <div className="mt-10  md:columns-3 space-y-2 columns-1 sm:columns-2 lg:columns-4 ">
            {notes.map((note) => (
              <NoteCard note={note} />
            ))}
          </div>
        </div>
      </main>
      <Outlet />
    </div>
  );
};
