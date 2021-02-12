import React from "react";
import { NavLink, Link } from "react-router-dom";
function BeforeLoginNav({ handleClick, click, closeMobileMenu }) {
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
        <div className="container is-pulled-right"></div>
        <NavLink
          className=" navbar-item btn before-signup signUp"
          to="/UserAccount"
          onClick={closeMobileMenu}
        >
          Sign Up
        </NavLink>
        <Link
          to="/Login"
          className="navbar-item btn before-login logIn"
          onClick={closeMobileMenu}
        >
          Log in
        </Link>
      </div>
    </>
  );
}

export default BeforeLoginNav;
