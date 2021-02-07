import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-wrap'>
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome to MDV Buddy!</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
            Your one-stop-shop for all your pet's needs! Here, you can easily
            schedule vet appointments, find pet sitters and more.
          </strong>
        </h3>

        <div className="buttons is-centered">
          <Link to="/CustomerAccount" className="button ">
            Create Account
          </Link>
          <Link to="/Login" className="button ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
