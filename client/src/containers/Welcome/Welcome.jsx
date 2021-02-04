import React, { Component, Link } from "react";
import "./Welcome.css";
import NewUser from "../../component/NewUser/NewUser";
import GuestLogin from "../../component/GuestLogin/GuestLogin";

class Welcome extends Component {
  state = {
    visible: true,
  };
  render() {
    return (
      <div className="card">
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active">
              <Link to="/">
                <span className="newUser is-small"></span>
                <span>Sign Up</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  this.setState({ visible: false });
                }}
              >
                <span className="is-small"></span>
                <span>Guest Login</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="adminLogin is-small"></span>
                <span>Administrative Login</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-content">
          <p className="title has-text-centered">Welcome to DVM Buddy!</p>
        </div>
        {this.state.visible ? <NewUser /> : <GuestLogin />}
      </div>
    );
  }
}

export default Welcome;
