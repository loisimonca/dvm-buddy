import { session } from "passport";
import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import "./UserHomePage.css"
// import API from './'


const UserHomePage = () => {
  const name = JSON.parse(sessionStorage.getItem('name'))
  return (
    <div className="user__landing__page__wrap">
      <div className="user__landing__video__wrap">
        <video src="/videos/dog.mp4" autoPlay loop muted />
      </div>
      <div className="user__landing__page container">
        <h2 className="user__landing__page__title">Welcome {name}!</h2>
        <div className="user__landing__page__body">
          <div className="user__landing__page__subtitle">
           Visit your Account to see more options
           </div>
           <NavLink to='/AccountManage' className="button is-large">Account</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;