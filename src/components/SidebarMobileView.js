import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import SidebarRow from "./SidebarRow";
// const SidebarMobileView = () => {
//   <div className=" sticky top-0 z-50 bg-black shadow-sm">
//     <div className="flex w-full items-center justify-between mx-auto py-3 px-6 ">
//       <SidebarRow
//         Icon={DescriptionOutlinedIcon}
//         title={"Notes"}
//         path={"notes"}
//       />
//       <SidebarRow Icon={ArchiveIcon} title={"Archive"} path={"archive"} />
//       <SidebarRow Icon={DeleteOutlineIcon} title={"Trash"} path={"trash"} />
//     </div>
//   </div>;
// };

// export default SidebarMobileView;

export const SidebarMobileView = () => {
  return (
    <div className=" sticky top-0 z-50 bg-white sm:hidden">
      <div className="flex w-full items-center justify-center spacex-2  mx-auto  ">
        <SidebarRow
          Icon={DescriptionOutlinedIcon}
          title={"Notes"}
          path={"notes"}
        />
        <SidebarRow Icon={ArchiveIcon} title={"Archive"} path={"archive"} />
        <SidebarRow Icon={DeleteOutlineIcon} title={"Trash"} path={"trash"} />
      </div>
    </div>
  );
};
