import React from "react";
import { NavLink } from "react-router-dom";

const TenantHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/tenantHome" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/requests" activeClassName="active-link">
              Your Request
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tenantProperty" activeClassName="active-link">
              Property Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tenantprofile" activeClassName="active-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TenantHeader;
