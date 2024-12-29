import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "../NavBar.jsx/NavBar.css";
import { getData } from "../../localstorage";
import Button from "../../Components/Button/Button";
import { isLogin, logout } from "../../api";
import movieLogo from "../../assets/Images/logo.png";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const current_user = getData("currentUser"); // Get current user from local storage
    setCurrentUser(current_user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={movieLogo} alt="Movie logo" className="logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {isLogin() ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;