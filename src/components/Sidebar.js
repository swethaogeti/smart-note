import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import SidebarRow from "./SidebarRow";

export const Sidebar = () => {
  return (
    <div className="p-2 mt-5  sticky max-w-[600px] md:min-w-[280px] hidden sm:block">
      <SidebarRow
        Icon={DescriptionOutlinedIcon}
        title={"Notes"}
        path={"notes"}
      />
      <SidebarRow
        Icon={ArchiveOutlinedIcon}
        title={"Archive"}
        path={"archive"}
      />
      <SidebarRow Icon={LabelOutlinedIcon} title={"Label"} path={"labels"} />
      <SidebarRow Icon={DeleteOutlineIcon} title={"Trash"} path={"trash"} />
    </div>
  );
};
