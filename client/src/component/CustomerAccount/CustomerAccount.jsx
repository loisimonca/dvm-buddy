import React from "react";
import "./CustomerAccount.css";

const CustomerAccount = () => {
  return (
    <div>
      <div ClassName Name="field">
        <label ClassName Name="label">
          First Name
        </label>
        <div ClassName Name="control">
          <input ClassName Name="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div ClassName Name="field">
        <label ClassName Name="label">
          Last Name
        </label>
        <div ClassName Name="control">
          <input ClassName Name="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div ClassName Name="field">
        <label ClassName Name="label">
          Phone Number
        </label>
        <div ClassName Name="control">
          <input ClassName Name="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div ClassName N="field">
        <label ClassName="label">Username</label>
        <div ClassName="control has-icons-left has-icons-right">
          <input
            ClassName="input is-success"
            type="text"
            placeholder="Text input"
            value="bulma"
          />
          <span ClassName="icon is-small is-left">
            <i ClassName="fas fa-user"></i>
          </span>
          <span ClassName="icon is-small is-right">
            <i ClassName="fas fa-check"></i>
          </span>
        </div>
        <p ClassName="help is-success">This username is available</p>
      </div>

      <div ClassName="field">
        <label ClassName="label">Email</label>
        <div ClassName="control has-icons-left has-icons-right">
          <input
            ClassName="input is-danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
          <span ClassName="icon is-small is-left">
            <i ClassName="fas fa-envelope"></i>
          </span>
          <span ClassName="icon is-small is-right">
            <i ClassName="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p ClassName="help is-danger">This email is invalid</p>
      </div>
      <div ClassName="field is-grouped">
        <div ClassName="control">
          <button ClassName="button is-link">Submit</button>
        </div>
        <div ClassName="control">
          <button ClassName="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;
