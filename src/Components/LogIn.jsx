import { AppContext } from "../App";
import { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const LogIn = () => {
  const { showLogInModal, hideLogInModal } = useContext(AppContext);
  return (
    // "login-modal-bg flex"
    <div
      className={
        showLogInModal
          ? "login-modal-bg flex show-login-modal"
          : "login-modal-bg flex"
      }
    >
      <div className="login-modal flex">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Login</button>
        </form>
        <div className="close-modal" onClick={hideLogInModal}>
          <FaRegWindowClose />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
