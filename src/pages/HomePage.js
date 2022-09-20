import axios from "axios";
import React from "react";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { TextEditor } from "../components/TextEditor";
import { useNotes } from "../contexts/NotesProvider";

export const HomePage = () => {
  const { notes } = useNotes();
  console.log(notes);
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center items-center mx-auto pt-5">
          <TextEditor
            editorState={{
              title: "",
              color: "#FFFFFF",
              tags: [],
              priority: "Low",
              note: "",
            }}
          />
          <div className="mt-10  md:columns-3 columns-1 sm:columns-2 lg:columns-4 ">
            {/* <NoteCard text="eriuewrhgf uyfeywgr yegywtey wqteywertwy wyterwytre euyruyr7457657 3746t236 4eghhwegr yetyte wyef eywtef y3t4y23t4 23yt43y2tr4 343yt2r4 " /> */}

            {notes.map((note) => (
              <NoteCard note={note} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
