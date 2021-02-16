import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

function EmployeeNavbar({ handleClick, click, closeMobileMenu }) {
  const { setValue, setToken, setUserId } = useContext(UserContext);
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.replace("/");
  };
  return (
    <>
      <div
        onClick={handleClick}
        role="button"
        className={
          click
            ? "navbar-burger is-pulled-right is-active"
            : "navbar-burger is-pulled-right"
        }
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div
        id="navbarBasicExample"
        className={click ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start is-pulled-left">
          <NavLink
            to="/appointmentedit"
            className="navbar-item link"
            onClick={closeMobileMenu}
          >
            Manage Appointments
          </NavLink>
          <NavLink
            to="/adminpetservices"
            className="navbar-item link"
            onClick={closeMobileMenu}
          >
            Manage Services
          </NavLink>

          <NavLink
            to="/AccountManage"
            className="navbar-item link"
            onClick={closeMobileMenu}
          >
            Account
          </NavLink>
        </div>
        {}
        <NavLink
          className=" navbar-item btn logOut"
          to="/"
          onClick={handleLogout}
        >
          Log out
        </NavLink>
      </div>
    </>
  );
}

export default EmployeeNavbar;
