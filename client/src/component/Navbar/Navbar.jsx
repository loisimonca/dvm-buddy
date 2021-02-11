import React, {useState, useContext, useEffect} from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import {UserContext } from '../../utils/UserContext';
import AfterLoginNav from './AfterLoginNav';
import BeforeLoginNav from './BeforeLoginNav';

const Navbar = () => {
  const {setValue, setToken} = useContext(UserContext);
  const [status, setStatus] = useState({data: {}, token: null})

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  useEffect(()=>{
    const userToken = JSON.parse(localStorage.getItem("token"))
    const userData = JSON.parse(localStorage.getItem("data"))
    if(userToken){
      setStatus({data: userData, token: userToken})
      setValue(userData)
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
        {}
        {status.token === null && <BeforeLoginNav  handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>}
        {status.token !== null && (
          status.data.userType=="User" 
          ? <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/> 
          : <AfterLoginNav handleClick={handleClick} click={click} closeMobileMenu={closeMobileMenu}/>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
