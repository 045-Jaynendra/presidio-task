import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/requestsTtoL" activeClassName="active-link">
              Request
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/propertyDetails" activeClassName="active-link">
              Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Lanlordprofile" activeClassName="active-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
