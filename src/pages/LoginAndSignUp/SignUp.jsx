import React, { useState } from "react";
import "./SignUp.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { signup } from "../../api";
import { Bounce, toast, ToastContainer } from "react-toastify";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const toggleMode = () => {
    setMessage("");
    setUserName("");
    setPassword("");
  };

  const handelSubmit = async () => {
    // Check if the name and other required fields are present
    if (formdata.name && formdata.email && formdata.password) {
      try {
        // Call the signup function and wait for the response
        const res = await signup(formdata);
        console.log(res); // You can handle success here
      } catch (e) {
        console.log(e); // Handle any errors here
      }
    } else {
      // Show an error message if required fields are missing
      toast.info("Please fill in all required fields");
    }
  };
  

  const handleInputData = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="outer-main-div">
      <div className="main">
        <h1 className="heading">{"Signup"}</h1>
        <form 
        // onSubmit={handelSubmit} 
        className="from-section">
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              value={formdata.name}
              onChange={(e) => handleInputData(e)}
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={formdata.email}
              onChange={(e) => handleInputData(e)}
              required
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Phone Number:</label>
            <input
              type="number"
              value={formdata.phone}
              onChange={(e) => handleInputData(e)}
              required
              name="phone"
            />
          </div>
          <div className="form-group password-container">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={formdata.password}
              required
              onChange={(e) => handleInputData(e)}
              name="password"
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
            Signup
          </button>
        </form>
        <p>{message}</p>
        <div className="account">
          <p>Do you have account?</p>
          <span className="small-button" onClick={toggleMode}>
            Login
          </span>
        </div>
      </div>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </div>
  );
};

export default SignUp;
