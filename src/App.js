import "./App.css";
import { createContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./Components/SideBar";

const AppContext = createContext();

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const displaySideBar = () => {
    setShowSideBar(true);
  };

  const hideSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="container">
      <AppContext.Provider value={{ showSideBar, hideSideBar }}>
        <div className="menu" onClick={displaySideBar}>
          <FaBars />
        </div>
        <SideBar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
