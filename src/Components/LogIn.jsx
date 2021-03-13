

const LogIn = () => {
  return (
    <div className="login-modal-bg flex">
      <div className="login-modal flex">
        <form className="login-form ">
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Login</button>
        
        </form>
      </div>
    </div>
  );
};

export default LogIn;
