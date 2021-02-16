import { session } from "passport";
import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import UpcomingSchedule from "./UpcomingSchedule";
import "./UserHomePage.css"
// import API from './'


const UserHomePage = () => {
  const name = JSON.parse(sessionStorage.getItem('name'))
  return (
    <div className='user__landing__page__whole'>
    <div className="user__landing__page__wrap container">
      <div className="user__landing__page__top__wrap">
        <h1 className="user__landing__page__top__title">Welcome to DVM Buddy</h1>
        <p className="user__landing__page__top__name">{name}</p>
        <UpcomingSchedule />
      </div>
      <div className="user__landing__page__wrap2">
      <div className="user__landing__video__wrap">
        <video src="/videos/dog.mp4" autoPlay loop muted />
        <NavLink to='/AccountManage' className="user__landing__page__account__button__inVideo">
          <img src="/images/pet-food.svg" alt="beach" />
          <p className="user__landing__page__account__word__inVideo">Account</p>
        </NavLink>
      </div>
      <div className="user__landing__page container">
        <h2 className="user__landing__page__title">Welcome to DVM Buddy</h2>
        <p className="user__landing__page__name">{name}</p>
        <div className='upcoming__schedule__mobile'>
          <UpcomingSchedule />
        </div>
        <div className="user__landing__page__description__container">
          <button className="user__landing__page__button">
            <img src="/images/veterinarian.svg" alt="veterianarian" />
            Veterinary Care
          </button>
          <button className="user__landing__page__button">
            <img src="/images/pawprints.svg" alt="pawprints" />
            Dog Walking
          </button>
          <button className="user__landing__page__button">
            <img src="/images/baby-sitter.svg" alt="baby-sitter" />
            Pet Sitter
          </button>
          <button className="user__landing__page__button">
            <img src="/images/beach.svg" alt="beach" />
            Pet Boarding
          </button>
        </div>

          <div className="user__landing__page__body">
            {/* <div className="user__landing__page__subtitle">
            Visit your Account to see more options
            </div> */}
            <NavLink to='/AccountManage' className="user__landing__page__account__button">
              Account
            </NavLink>
          </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default UserHomePage;