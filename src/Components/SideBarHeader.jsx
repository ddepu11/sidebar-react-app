import { useContext } from "react";
import { FcCloseUpMode } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { AppContext } from "../App";

const SideBarHeader = () => {
  const { hideSideBar } = useContext(AppContext);

  return (
    <div className="header flex">
      <div className="hLeft flex">
        <FcCloseUpMode size="3em" />
        <span>Lotus Sidebar</span>
      </div>

      <div className="hRight" onClick={hideSideBar}>
        <AiFillCloseCircle size="1.7em" />
      </div>
    </div>
  );
};

export default SideBarHeader;
