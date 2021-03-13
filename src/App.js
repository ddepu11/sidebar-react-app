import "./App.css";
import { createContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./Components/SideBar";
import LogIn from "./Components/LogIn";

const AppContext = createContext();

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const displaySideBar = () => {
    setShowSideBar(true);
  };

  const hideSideBar = () => {
    setShowSideBar(false);
  };

  const displayModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <AppContext.Provider
        value={{ showSideBar, showModal, hideSideBar, displayModal, hideModal }}
      >
        <div className="menu" onClick={displaySideBar}>
          <FaBars />
        </div>

        <button className="login">Log In</button>

        <LogIn />

        <SideBar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
