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
export const NoteCard = ({ text }) => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-full break-inside-avoid-column mt-2 border-[1px] border-gray-300 space-y-3 mx-4 sm:mx-0   sm:max-w-[290px]  p-4 max-h-fit shadow-[0_3px_5px_rgb(0,0,0,0.2)] rounded-md cursor-pointer">
      <div className="flex justify-between items-center">
        <button className="outline outline-1  text-gray-800 font-[600] text-[1rem] p-1 rounded-sm">
          Low
        </button>
        {pathname !== "/trash" && (
          <button>
            <PushPinOutlinedIcon className="btn" />
          </button>
        )}
      </div>
      <h1 className="sm:text-[1.3rem]  leading-5 font-[600] text-gray-700 overflow-hidden text-ellipsis">
        kfjkdfkgasgdjatekjkjdueyyweqyw
      </h1>
      <div className=" break-words text-[.9rem] text-black">{text}</div>

      <div className="flex space-x-1 items-center">
        <ScheduleOutlinedIcon className="btn" />
        <p className="text-[.9rem] text-gray-600">a min ago</p>
      </div>
      <div className="space-x-3 flex">
        {pathname === "/notes" && (
          <div className="space-x-3 flex">
            <ColorPallete />
            <Tags />
            <Priority />
          </div>
        )}
        {pathname === "/notes" && <ArchiveOutlinedIcon className="btn" />}
        {pathname === "/archive" && <UnarchiveIcon className="btn" />}
        {pathname === "/trash" && <RestoreFromTrashIcon className="btn" />}
        {pathname !== "/notes" && <DeleteIcon className="btn" />}
        {pathname !== "/archive" && pathname !== "/trash" && (
          <DeleteOutlinedIcon className="btn" />
        )}
      </div>
    </div>
  );
};
