import React, {useState, useContext, useEffect} from 'react'
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import {UserContext } from '../../utils/UserContext';
import AfterLoginNav from './AfterLoginNav';
import BeforeLoginNav from './BeforeLoginNav';

const Navbar = () => {
  const {value, setValue} = useContext(UserContext);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('user'));
    if(data){
      if(data.userType==="User"){
        setValue("User")
      }else if(data.userType ==='Employee'){
        setValue("Employee")
      }
    }else{
      setValue(false)
    }
  })
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
        {value==="User" && <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>}
        {value==="Employee" && <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/> }
        {value===false && <BeforeLoginNav  handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>}
      </nav>
    </div>
  );
};

export default Navbar;
