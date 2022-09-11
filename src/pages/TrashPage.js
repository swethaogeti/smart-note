import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const TrashPage = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        {/* <div className="mx-auto">
          <TextEditor />
          <NoteCard />
        </div> */}
      </main>
    </div>
  );
};
