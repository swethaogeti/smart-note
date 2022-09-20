import React from "react";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { useTrash } from "../contexts/TrashProvider";

export const TrashPage = () => {
  const { trash } = useTrash();
  console.log(trash);
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        <div className="mt-8 md:columns-3 columns-1 sm:columns-2 lg:columns-4 ">
          {trash?.map((archive) => {
            return <NoteCard note={archive} />;
          })}
        </div>
      </main>
    </div>
  );
};
