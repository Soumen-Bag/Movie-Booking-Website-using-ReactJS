import React, { useState } from "react";
import "./LoginAndSignUp.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { login } from "../../api";
const LoginAndSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handelSubmit = async () => {
    // e.preventDefault();

    // if (isLoginMode) {
    //   //login
    //   const storedPassword = localStorage.getItem(userName);
    //   if (storedPassword && storedPassword === password) {
    //     setMessage(`Welcome,${userName}`);
    //   } else {
    //     setMessage("User Name or password ivalid");
    //   }
    // } else {
    //signup
    //   if (localStorage.getItem(userName)) {
    //     setMessage("Username is already exists");
    //   } else {
    //     localStorage.setItem(userName, password);
    //     setMessage("Signup successful! You can now log in.");
    //     setIsLoginMode(true);
    //   }
    // }
    // setMessage("");
    try {
      const result= await login(userName, password);
      console.log(result)
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while logging in.");
    }
    setUserName("");
    setPassword("");
    //  console.log(localStorage.getItem(userName))
  };

  return (
    <div className="outer-main-div">
      <div className="main">
        <h1 className="heading">Login</h1>
        <form  className="from-section">
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group password-container">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoMdEyeOff className="eye" />
              ) : (
                <IoEye className="eye" />
              )}
            </button>
          </div>
          <button type="button" className="main-button" onClick={handelSubmit}>
            Login
          </button>
        </form>
        <p>{message}</p>
        <div className="account">
          <p>Do you want to create new account?</p>
          <a href="/signup">
          <span className="small-button" >
            Signup
          </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
