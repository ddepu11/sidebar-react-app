import "./App.css";
import { createContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./Components/SideBar";
import LogIn from "./Components/LogIn";

const AppContext = createContext();

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  const displaySideBar = () => {
    setShowSideBar(true);
  };

  const hideSideBar = () => {
    setShowSideBar(false);
  };

  const displayLogInModal = () => {
    setShowLogInModal(true);
  };

  const hideLogInModal = () => {
    setShowLogInModal(false);
  };

  return (
    <div className="container">
      <AppContext.Provider
        value={{
          showSideBar,
          showLogInModal,
          hideSideBar,
          displayLogInModal,
          hideLogInModal,
        }}
      >
        <div className="menu" onClick={displaySideBar}>
          <FaBars />
        </div>

        <button className="login" onClick={displayLogInModal}>
          Log In
        </button>

        <LogIn />

        <SideBar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
