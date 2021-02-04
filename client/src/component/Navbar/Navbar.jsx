import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-main" href="/">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
            <h1 className="is-size-1">DVM Buddy</h1>
          </a>

          <a
            role="button"
            className="navbar-burger is-right"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start is-pulled-left">
            <a className="navbar-item link">Reservation</a>

            <a className="navbar-item link">Side Walker</a>
            <a className="navbar-item link">Pet Sitter</a>
            <a className="navbar-item link">Boarding</a>
            <a className="navbar-item btn signUp">Sign up</a>
            <a className="navbar-item btn logIn">Log in</a>
          </div>
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
