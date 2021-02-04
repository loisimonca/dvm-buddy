import React from "react";
import "./GuestLogin.css";

const GuestLogin = () => {
  return (
    <div>
      <div className="container">
        <div className="field email">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="hello@dvmbuddy.com"
              // value="hello@dvmbuddy.com"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right"></span>
          </div>
          {/* <p className="help is-danger">This email is invalid</p> */}
        </div>

        <div className="field">
          <label className="label"> Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="password"
              // value="hello@dvmbuddy.com"
            />
            <span className="is-small is-right"></span>
          </div>
          {/* <p className="help is-danger">This email is invalid</p> */}
        </div>

        {/* <p className="help is-danger">This email is invalid</p> */}

        <div className="control has-text-centered">
          <button className="button login is-link">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default GuestLogin;
