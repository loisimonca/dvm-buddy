import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import AfterLoginNav from "./AfterLoginNav";
import BeforeLoginNav from "./BeforeLoginNav";
import EmployeeNavbar from "./EmployeeNavbar";

const Navbar = () => {
  const { value, setValue, token, setToken, setUserId } = useContext(
    UserContext
  );

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("token"));
    const userType = JSON.parse(sessionStorage.getItem("type"));
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    // console.log(userId);
    if (userToken) {
      setValue(userType);
      setToken(userToken);
      setUserId(userId);
    }
  }, []);
  const logoLink = function (link) {
    return (
      <Link
        to={link}
        className="navbar-main is-pulled-left"
        onClick={closeMobileMenu}
      >
        <h1 className="nav-title">
          <i className="fas fa-paw"></i> DVM Buddy
        </h1>
      </Link>
    );
  };
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {token === null
            ? logoLink("/")
            : value === "User"
            ? logoLink("/UserHomePage")
            : logoLink("/AdminHomePage")}
        </div>
        {token === null && (
          <BeforeLoginNav
            handleClick={handleClick}
            click={click}
            closeMobileMenu={closeMobileMenu}
          />
        )}
        {token !== null &&
          (value === "User" ? (
            <AfterLoginNav
              handleClick={handleClick}
              click={click}
              closeMobileMenu={closeMobileMenu}
            />
          ) : (
            <EmployeeNavbar
              handleClick={handleClick}
              click={click}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
      </nav>
    </div>
  );
};

export default Navbar;
