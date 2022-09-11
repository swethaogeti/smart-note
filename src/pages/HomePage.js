import React from "react";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { QuillEditor } from "../components/QuillEditor/QuillEditor";
import { Sidebar } from "../components/Sidebar";
import { SidebarMobileView } from "../components/SidebarMobileView";
import { TextEditor } from "../components/TextEditor";
import Masonry from "react-masonry-css";
export const HomePage = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center items-center mx-auto pt-5">
          <TextEditor />
          <div className="mt-10 md:columns-3 columns-1 sm:columns-2 lg:columns-4 ">
            <NoteCard text="eriuewruiheruyerutrtereuwry" />
            <NoteCard text="m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv" />

            <NoteCard text="looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)" />
            <NoteCard text="" />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClin"
            />
            <NoteCard text="" />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClin"
            />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of "
            />
            <NoteCard text="Wcal Latin literature from 45 BC, making it over 2000 years old. Richard McClin" />
            <NoteCard text="" />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClin"
            />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of "
            />
            <NoteCard text="" />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClin"
            />
            <NoteCard
              text="Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of "
            />
          </div>
        </div>
      </main>
    </div>
  );
};
