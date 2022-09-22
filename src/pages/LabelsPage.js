import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useNotes } from "../contexts/NotesProvider";

export const LabelsPage = () => {
  const { notes } = useNotes();
  console.log(notes);

  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        <div>
          {notes.map((item) => {
            return <h1>{item.title}</h1>;
          })}
        </div>
      </main>
    </div>
  );
};
