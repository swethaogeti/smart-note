import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";

export const ArchivePage = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        {/* <div className="mt-8 md:columns-3 columns-1 sm:columns-2 lg:columns-4 ">
          <NoteCard text="Elizabeth II (Elizabeth Alexandra Mary; 21 April 1926 – 8 September 2022) was Queen of the United Kingdom and other Commonwealth realms" />
        </div> */}
      </main>
    </div>
  );
};
