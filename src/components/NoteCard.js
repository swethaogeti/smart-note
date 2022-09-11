import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export const NoteCard = ({ text }) => {
  return (
    <div className=" max-w-full break-inside-avoid-column  border-2 space-y-2 mx-4 sm:mx-0  my-2 sm:max-w-[290px]  p-3 max-h-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md cursor-pointer">
      <div className="flex justify-between items-center">
        <button className="outline outline-1  text-gray-800 font-[600] text-[1rem] p-1 rounded-sm">
          Low
        </button>
        <PushPinOutlinedIcon />
      </div>
      <h1 className="sm:text-[1.3rem] leading-5 font-[600] text-gray-700 overflow-hidden text-ellipsis">
        kfjkdfkgasgdjatekjkjdueyyweqyw
      </h1>
      <div className=" break-words ">{text}</div>

      <div className="flex space-x-2 items-center">
        <ScheduleOutlinedIcon />
        <p>a min ago</p>
      </div>
      <div className="space-x-3">
        <PaletteOutlinedIcon />
        <LabelOutlinedIcon />
        <SubjectOutlinedIcon />
        <ArchiveOutlinedIcon />
        <DeleteOutlinedIcon />
      </div>
    </div>
  );
};
