import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DeleteIcon from "@mui/icons-material/Delete";
import { Priority } from "./Priority";
import { ColorPallete } from "./ColorPallete";
import { Tags } from "./Tags";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import {
  addNoteToArchivesService,
  addNoteToTrashService,
} from "../services/services";
import { useAuth } from "../contexts/AuthProvider";
import { useArchives } from "../contexts/ArchiveProvider";
import { SET_ARCHIVE, SET_NOTES, SET_TRASH } from "../constants";
import { useNotes } from "../contexts/NotesProvider";
import { useTrash } from "../contexts/TrashProvider";

export const NoteCard = ({ note }) => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { dispatchArchives } = useArchives();
  const { dispatchNotes } = useNotes();
  const { dispatchTrash } = useTrash();
  const addToArchiveHandle = async () => {
    const response = await addNoteToArchivesService(user.token, note);
    dispatchArchives({ type: SET_ARCHIVE, payload: response.data.archives });
    dispatchNotes({ type: SET_NOTES, payload: response.data.notes });
    console.log(response);
  };

  const addNoteToTrashHandle = async () => {
    const response = await addNoteToTrashService(user.token, note);
    dispatchTrash({ type: SET_TRASH, payload: response.data.trash });
    dispatchNotes({ type: SET_NOTES, payload: response.data.notes });
  };

  return (
    <div
      style={{ backgroundColor: note.color }}
      className="max-w-full 
    break-inside-avoid-column mt-2 border-[1px] border-gray-300 space-y-3 mx-4 sm:mx-0   sm:w-[290px]  p-4 max-h-fit shadow-[0_3px_5px_rgb(0,0,0,0.2)] rounded-md cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <button className="outline outline-1  text-gray-800 font-[600] text-[1rem] p-1 rounded-sm">
          {note.priority}
        </button>
        {pathname !== "/trash" && (
          <button>
            <PushPinOutlinedIcon className="btn" />
          </button>
        )}
      </div>
      <h1 className="sm:text-[1.3rem]  leading-5 font-[600] text-gray-700 overflow-hidden text-ellipsis">
        {note.title}
      </h1>
      <div
        className=" break-words text-[.9rem] text-black"
        dangerouslySetInnerHTML={{ __html: note.note }}
      ></div>
      <div className="flex">
        {note?.tags?.map((item) => {
          return (
            <div>
              <button className="px-[2px] py-[1px] m-1 text-[1rem] bg-white border-2 text-black border-gray-400 rounded-md">
                {item}
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex space-x-1 items-center">
        <ScheduleOutlinedIcon className="btn" />
        <p className="text-[.9rem] text-gray-600">
          <Moment fromNow>{note.created}</Moment>
        </p>
      </div>
      <div className="space-x-3 flex">
        {pathname === "/notes" && (
          <div className="space-x-3 flex">
            <ColorPallete />
            <Tags />
            <Priority />
          </div>
        )}
        {pathname === "/notes" && (
          <ArchiveOutlinedIcon
            className="btn"
            onClick={() => addToArchiveHandle()}
          />
        )}
        {pathname === "/archive" && <UnarchiveIcon className="btn" />}
        {pathname === "/trash" && <RestoreFromTrashIcon className="btn" />}
        {pathname !== "/notes" && <DeleteIcon className="btn" />}
        {pathname !== "/archive" && pathname !== "/trash" && (
          <DeleteOutlinedIcon
            className="btn"
            onClick={() => addNoteToTrashHandle()}
          />
        )}
      </div>
    </div>
  );
};
