import SideBarHeader from "./SideBarHeader";
import SocialLinks from "./SocialLinks";
import Links from "./Links";
import { AppContext } from "../App";
import { useContext } from "react";

const SideBar = () => {
  const { showSideBar } = useContext(AppContext);

  return (
    // "sidebar card"
    <div className={showSideBar ? "sidebar card show-sidebar" : "sidebar card"}>
      <SideBarHeader />
      <Links />
      <SocialLinks />
    </div>
  );
};

export default SideBar;
