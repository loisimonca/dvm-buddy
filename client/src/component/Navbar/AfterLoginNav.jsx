import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
function AfterLoginNav({ handleClick, click, closeMobileMenu }) {
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
          <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
            Reservations
          </Link>
          <Link
            to="/petservices"
            className="navbar-item link"
            onClick={closeMobileMenu}
          >
            Pet Services
          </Link>

          <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
            Account
          </Link>
        </div>
        <NavLink
          className=" navbar-item btn logOut"
          to="/CustomerAccount"
          onClick={closeMobileMenu}
        >
          Log out
        </NavLink>
        {/* <Link
            to="/Login"
            className="navbar-item btn logIn"
            onClick={closeMobileMenu}
          >
            Log in
          </Link> */}
      </div>
    </>
  );
}

export default AfterLoginNav;
