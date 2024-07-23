import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import underlineImage from "./밑줄.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>로고</span>
      </div>
      <nav className="navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/diary"
              className="nav-link"
              activeClassName="active"
            >
              DIARY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/analyze"
              className="nav-link"
              activeClassName="active"
            >
              DOPAMINE
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <NavLink to="/">
          <button className="login-btn">Log in</button>
        </NavLink>
        <button className="get-started-btn">Get started</button>
      </div>
    </header>
  );
};

export default Header;
