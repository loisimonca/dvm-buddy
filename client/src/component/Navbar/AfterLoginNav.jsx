import React, {useContext} from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from '../../utils/UserContext'

function AfterLoginNav({ handleClick, click, closeMobileMenu }) {
  // const history = useHistory();
  const {value, setValue, setToken} = useContext(UserContext)
  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.setItem("data", null);
    localStorage.setItem("token", null);
    setValue(null)
    setToken(null)
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
          <Link to="/ScheduleAppointments" className="navbar-item link" onClick={closeMobileMenu}>
            Schedule Appointments
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
