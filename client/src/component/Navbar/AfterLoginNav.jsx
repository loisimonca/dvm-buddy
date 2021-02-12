import React, {useContext} from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from '../../utils/UserContext'

function AfterLoginNav({ handleClick, click, closeMobileMenu }) {
  // const history = useHistory();
  const {setValue, setToken} = useContext(UserContext)
  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.setItem("token", null);
    localStorage.setItem("type", null);
    setToken(null)
    setValue(null)
    window.location.replace('/')
  }
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

          <Link to="/AccountManage" className="navbar-item link" onClick={closeMobileMenu}>
            Account
          </Link>
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

export default AfterLoginNav;
