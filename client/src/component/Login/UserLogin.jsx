import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import UserGoogleLogin from "./UserGoogleLogin";
// import UserGoogleLogout from './UserGoogleLogout';
import UserFacebookLogin from "./UserFacebookLogin";
import { UserContext } from "../../utils/UserContext";
// verify login at the front
import jwt from 'jsonwebtoken';

function UserLogin() {
  const { setValue, setToken, setUserId, setDomain } = useContext(UserContext);

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
        console.log(res.data.token)
        console.log(res)
        jwt.verify(res.data.token, process.env.REACT_APP_JWT_SIGNATURE, (err, decoded) =>{
          if(err){
            console.log(err)
          }else{
            if(res.data.type === 'User'){
              // setToken(res.data.token)
              // setValue("User")
              // setUserId(res.data.id)
              // setDomain('Local')
              sessionStorage.setItem('token', JSON.stringify(res.data.token))
              sessionStorage.setItem('type', JSON.stringify("User"))
              sessionStorage.setItem('userId', JSON.stringify(res.data.id));
              sessionStorage.setItem('domain', JSON.stringify("Local"));
            }else if(res.data.type ==='Employee'){
              // setToken(res.data.token)
              // setValue("Employee")
              // setUserId(res.data.id)
              sessionStorage.setItem('token', JSON.stringify(res.data.token))
              sessionStorage.setItem('type', JSON.stringify("Employee"))
              sessionStorage.setItem('userId', JSON.stringify(res.data.id));
            }
          }
        })
        window.location.replace('/')
      })
      .catch((err) => {
        alert("Incorrect email address or password");
      });
  };
  return (
    <div className="login-wrap">
      <div className="login-inner-container container">
        <i className="login-page-icon is-size-4 fas fa-paw"></i>
        <h1 className="login-header  is-size-4 ">Log in to Your Account</h1>
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
                autoComplete="off"
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
          <UserGoogleLogin />
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
