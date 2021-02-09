import React, {useContext} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import UserGoogleLogin from './UserGoogleLogin';
// import UserGoogleLogout from './UserGoogleLogout';
import UserFacebookLogin from './UserFacebookLogin';
import {UserContext } from '../../utils/UserContext';

function UserLogin() {
  const {value, setValue} = useContext(UserContext);
console.log(value)
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    API.userLogin({
      email: email,
      password: password,
    })
      // redirect to the account page
      .then((res) => {
        setValue("true")
        console.log(res.data)
        // const data = res.data.userType;
        // if (data === "User") {
        //   console.log("welcome user");
        //   // window.location.replace("/");
        // } else if (data === "Employee") {
        //   console.log("Welcome Employee");
        //   // window.location.replace("/");
        // }
      })
      .catch((err) => {
        alert("Incorrect email address or password");
      });
  };
  return (
    <div className="login-wrap">
      <div className="login-inner-container container">
        <i className="login-page-icon fas fa-paw"></i>
        <h1 className="login-header">Log in to Your Account</h1>
        <div className="user-login-container">
          <form onSubmit={handleLogIn}>
            <div className="user-login-with-account">
              <input
                type="text"
                className="user-login-input"
                id="user-email"
                name="user-login-email"
                placeholder="User email"
              />
            </div>
            <div className="user-login-with-account">
              <input
                autoComplete='off'
                type="password"
                className="user-login-input"
                id="user-password"
                name="user-login-password"
                placeholder="User Password"
              />
            </div>
            <div>
              <button className="login-submit-button" type="submit">
                LOGIN
              </button>
            </div>
          </form>
            <UserGoogleLogin/>
            <UserFacebookLogin />
        </div>
        <footer className="login-page-footer">
          Need an account? <Link to="/CustomerAccount">Sign Up</Link>
        </footer>
        <div className="login-page-back-to-home">
          <Link className="login-page-back-to-home-link" to="/">
            <i className="login-page-icon far fa-hand-point-left"></i>Back to
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
