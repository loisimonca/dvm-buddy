import React from "react";
import {NavLink} from 'react-router-dom'
import "./UserHomePage.css"
// import API from './'


const UserHomePage = () => {
  return (
    <div className="user__landing__page__container">
      <video src="/videos/cat.mp4" autoPlay loop muted />
      <div className="user__landing__page container">
        <h2 className="user__landing__page__title">Welcome User!</h2>
        <h3 className="user__landing__page__subtitle ">
          <strong>
           Visit your Account to see more options
           <NavLink to='/AccountManage' className="button is-large">Account</NavLink>
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default UserHomePage;