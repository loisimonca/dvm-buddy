import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-main is-pulled-left">
            <h1 className="is-size-1">DVM Buddy</h1>
          </Link>
        </div>

        <a
          role="button"
          className="navbar-burger is-pulled-right"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start is-pulled-left">
            <Link to="/" className="navbar-item link">
              Reservation
            </Link>

            <Link to="/" className="navbar-item link">
              Side Walker
            </Link>
            <Link to="/" className="navbar-item link">
              Pet Sitter
            </Link>
            <Link to="/" className="navbar-item link">
              Boarding
            </Link>
          </div>
          <NavLink className=" navbar-item btn signUp" to="/CustomerAccount">
            Sign up
          </NavLink>
          <Link to="/" className="navbar-item btn logIn">
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
};
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default Navbar;
