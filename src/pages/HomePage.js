import React from "react";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { TextEditor } from "../components/TextEditor";
import Masonry from "react-masonry-css";
import { TextEditorModal } from "../components/TextEditorModal";
export const HomePage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      {/* <TextEditorModal /> */}
      <main className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center items-center mx-auto pt-5">
          <TextEditor />
          <div className="mt-10  md:columns-3 columns-1 sm:columns-2 lg:columns-4 ">
            <NoteCard text="eriuewrhgf uyfeywgr yegywtey wqteywertwy wyterwytre euyruyr7457657 3746t236 4eghhwegr yetyte wyef eywtef y3t4y23t4 23yt43y2tr4 343yt2r4 " />
          </div>
        </div>
      </main>
    </div>
  );
};
