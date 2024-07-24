import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import underlineImage from "./밑줄.png";
import logoImage from "./logo.png";
const Header = () => {
  return (
    <header className="header-1">
      <nav className="navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/calendar"
              className="nav-link"
              activeClassName="active"
            >
              DIARY
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="auth-buttons">
        <NavLink to="/login">
          <button className="login-btn">Log in</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;