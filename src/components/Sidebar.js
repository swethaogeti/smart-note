import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import SidebarRow from "./SidebarRow";

export const Sidebar = () => {
  return (
    <div className="p-2 mt-5  sticky max-w-[600px] md:min-w-[280px] hidden sm:block">
      <SidebarRow
        Icon={DescriptionOutlinedIcon}
        title={"Notes"}
        path={"notes"}
      />
      <SidebarRow Icon={ArchiveIcon} title={"Archive"} path={"archive"} />
      <SidebarRow Icon={DeleteOutlineIcon} title={"Trash"} path={"trash"} />
    </div>
  );
};
