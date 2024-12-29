import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { getData } from "../../localstorage";
import Button from "../Button/Button";
import { isLogin, logout } from "../../api";
import movieLogo from "../../assets/Images/logo.jfif";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const current_user = getData("currentUser");
    setCurrentUser(current_user);
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={movieLogo} alt="Movie logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {isLogin() ? (
          <>
            <Link to="/profile">Profile</Link>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;