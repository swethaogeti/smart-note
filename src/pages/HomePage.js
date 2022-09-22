import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { Sidebar } from "../components/Sidebar";
import { TextEditor } from "../components/TextEditor";
import { useNotes } from "../contexts/NotesProvider";
import { useFilters } from "../contexts/FiltersProvider";
import {
  getPriorityNotes,
  getSortedNotes,
  getTagsNotes,
} from "../utils/filterOperations";
export const HomePage = () => {
  const { notes } = useNotes();
  const { filters } = useFilters();

  const { sortBy, priorities, tags } = filters;

  const sortNotes = getSortedNotes(notes, sortBy);

  const prioritiesNotes = getPriorityNotes(sortNotes, priorities);
  const tagsNotes = getTagsNotes(prioritiesNotes, tags);
  const filterNotes = tagsNotes;

  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center items-center mx-auto pt-5 pb-24">
          <div>
            <TextEditor
              editorState={{
                title: "",
                color: "#FFFFFF",
                tags: [],
                priority: "Low",
                note: "",
              }}
            />
          </div>

          <div className="mt-10  md:columns-3 space-y-2 columns-1 sm:columns-2 lg:columns-4 ">
            {filterNotes.map((note) => (
              <NoteCard note={note} key={note._id} />
            ))}
          </div>
        </div>
      </main>
      <Outlet />
    </div>
  );
};
