import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-main is-pulled-left"
            onClick={closeMobileMenu}
          >
            <h1 className="is-size-1">
              {" "}
              <i className="fas fa-paw"></i> DVM Buddy
            </h1>
          </Link>
        </div>

        <a
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
        </a>
        <div
          id="navbarBasicExample"
          className={click ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start is-pulled-left">
            <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
              Reservation
            </Link>

            <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
              Side Walker
            </Link>
            <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
              Pet Sitter
            </Link>
            <Link
              to="/boarding"
              className="navbar-item link"
              onClick={closeMobileMenu}
            >
              Boarding
            </Link>
            <Link to="/" className="navbar-item link" onClick={closeMobileMenu}>
              Account
            </Link>
          </div>
          <NavLink
            className=" navbar-item btn signUp"
            to="/CustomerAccount"
            onClick={closeMobileMenu}
          >
            Sign up
          </NavLink>
          <Link
            to="/Login"
            className="navbar-item btn logIn"
            onClick={closeMobileMenu}
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
};
// document.addEventListener("DOMContentLoaded", () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll(".navbar-burger"),
//     0
//   );
//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach((el) => {
//       el.addEventListener("click", () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);
//         console.log(target)
//         console.log($target)
//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }
// });
export default Navbar;
