import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrap">
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome to DVM Buddy!</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
            Your one-stop-shop for all your pet's needs! <br />
            Here, you can easily schedule vet appointments,
            <br /> find pet sitters and more.
          </strong>
        </h3>

        <div className="buttons homeButton is-centered">
          <Link to="/UserAccount" className="button ">
            <strong>Create Account</strong>
          </Link>
          <Link to="/Login" className="button  homeButton">
            <strong>Login</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
