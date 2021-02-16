import React from "react";
import {NavLink} from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className="home-wrap">
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome Admin!</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
           Visit your Account to see more Options <br />
           <NavLink to="/AccountManage" className="button is-large is-fullwidth">Account</NavLink>
            <br /> 
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default AdminHomePage;