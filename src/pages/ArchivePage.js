import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { useArchives } from "../contexts/ArchiveProvider";

export const ArchivePage = () => {
  const { archives } = useArchives();

  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        <div className="mt-8 md:columns-3 columns-1 sm:columns-2 lg:columns-4 space-y-2 ">
          {archives?.map((archive) => {
            return <NoteCard note={archive} />;
          })}
        </div>
      </main>
    </div>
  );
};
