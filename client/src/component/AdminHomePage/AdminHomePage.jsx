import React from "react";
import {NavLink} from 'react-router-dom'

const AdminHomePage = () => {
  const name = JSON.parse(sessionStorage.getItem('name'))
  return (
    <div className="home-wrap">
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome {name}</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
           Visit your Account to see more Options <br />
           <button className="user__landing__page__button">
                <NavLink to='AppointmentEdit'>
                <img src="/images/calendar.svg" alt="veterianarian" />
                Scheduling Manage
                </NavLink>
              </button>
              <button className="user__landing__page__button">
                <NavLink to='/AdminPetServices' >
                <img src="/images/folder-management.svg" alt="pawprints" />
                  Pet Services Manage
                  </NavLink>
              </button>
              <button className="user__landing__page__button">
              <NavLink to='/AccountManage'>
                <img src="/images/account.svg" alt="baby-sitter" />
                  Account Manage
                  </NavLink>
              </button>

          </strong>
        </h3>
      </div>
    </div>
  );
};

export default AdminHomePage;