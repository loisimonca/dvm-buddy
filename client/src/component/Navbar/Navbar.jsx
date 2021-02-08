import React, {useState, useContext} from 'react'
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import {UserContext } from '../../utils/UserContext';
import AfterLoginNav from './AfterLoginNav';
import BeforeLoginNav from './BeforeLoginNav';

const Navbar = () => {
  const {value, setValue} = useContext(UserContext);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <div >
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-main is-pulled-left"
            onClick={closeMobileMenu}
          >
            <h1 className="nav-title">
              <i className="fas fa-paw"></i> DVM Buddy
            </h1>
          </Link>
        </div>
        {value? <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/> : <BeforeLoginNav  handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>}
      </nav>
    </div>
  );
};

export default Navbar;
