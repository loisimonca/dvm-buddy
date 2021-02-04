import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="card">
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active">
            <a>
              <span className="is-small"></span>
              <span>Sign Up</span>
            </a>
          </li>
          <li>
            <a>
              <span className=" is-small"></span>
              <span>Guest Login</span>
            </a>
          </li>
          <li>
            <a>
              <span className="is-small"></span>
              <span>Administrative Login</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="card-content">
        <p className="title has-text-centered">Welcome to DVM Buddy!</p>
      </div>

      <div className="container">
        <div className="columns">
          <div className="field column">
            <label className="label ">First Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field column">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>

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
        <div className="columns">
          <div className="field column">
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
          <div className="field column">
            <label className="label"> Confirm Password</label>
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
        </div>

        <div className="field">
          <label className="label">Account Type</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>Patient</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" /> I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" /> Yes
            </label>{" "}
            <label className="radio">
              <input type="radio" name="question" /> No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button submit is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
