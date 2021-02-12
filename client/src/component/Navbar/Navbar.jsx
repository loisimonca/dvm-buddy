import React, {useState, useContext, useEffect} from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import {UserContext } from '../../utils/UserContext';
import AfterLoginNav from './AfterLoginNav';
import BeforeLoginNav from './BeforeLoginNav';
import EmployeeNavbar from './EmployeeNavbar';

const Navbar = () => {
  const {value, setValue, token, setToken} = useContext(UserContext);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  useEffect(()=>{
    const userToken = JSON.parse(localStorage.getItem("token"))
    const userType = JSON.parse(localStorage.getItem("type"))
    if(userToken){
      setValue(userType)
      setToken(userToken)
    }
  },[])
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
        {token === null && <BeforeLoginNav  handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>}
        {token !== null && (
          value=="User" 
          ? <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/> 
          : <EmployeeNavbar handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
