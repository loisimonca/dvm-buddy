import React, { useState } from "react";
import "./CustomerAccount.css";
import API from "../../utils/API";

const CustomerAccount = () => {
  const [userInfo, setUserInfo] = useState();
  const handleChange = function (e) {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if (id === "f-name") {
      setUserInfo({ ...userInfo, firstName: value });
    } else if (id === "l-name") {
      setUserInfo({ ...userInfo, lastName: value });
    } else if (id === "u-name") {
      setUserInfo({ ...userInfo, username: value });
    } else if (id === "password") {
      setUserInfo({ ...userInfo, password: value });
    } else if (id === "tel") {
      setUserInfo({ ...userInfo, tel: parseInt(value) });
    } else if (id === "email") {
      setUserInfo({ ...userInfo, email: value });
    } else if (id === "emergency-name") {
      setUserInfo({ ...userInfo, emergencyName: value });
    } else if (id === "emergency-tel") {
      setUserInfo({ ...userInfo, emergencyTel: parseInt(value) });
    } else if (id === "pet-name") {
      setUserInfo({ ...userInfo, petName: value });
    } else if (id === "pet-type") {
      setUserInfo({ ...userInfo, petType: value });
    } else if (id === "pet-breed") {
      setUserInfo({ ...userInfo, petBreed: value });
    } else if (id === "add-info") {
      setUserInfo({ ...userInfo, addInfo: value });
    }
  };
  //redirect to the home page after submit
  const handleSubmit = function (e) {
    e.preventDefault();
    API.createUser(userInfo)
      .then((res) => window.location.replace("/"))
      .catch((err) => console.log(err));
  };
  //confirm password
  const [pwdConfirm, setPwdConfirm] = useState();
  const confirmPassword = function (e) {
    e.preventDefault();
    setPwdConfirm(e.target.value);
  };
  if (userInfo) {
    if (pwdConfirm !== userInfo.password) {
      console.log("not match");
    }
  }
  return (
    <>
      <div className="create-container container">
        <div className="create-inner-container">
          <h1>
            <i className="create-page-icon fas fa-paw"></i>DVM Buddy
          </h1>
          <h1 className="create-header">Create your account</h1>
          <div className="user-create-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="f-name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="l-name"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="tel"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
              </div>

              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm"
                  onChange={confirmPassword}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="emergency-name"
                  placeholder="Emergency Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="emergency-tel"
                  placeholder="Emergency Number "
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="create-container container">
        <div className="create-inner-container">
          <h1>
            <i className="create-page-icon fas fa-paw"></i>DVM Buddy
          </h1>
          <h1 className="create-header">Pet Info</h1>
          <div className="user-create-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="pet-name"
                  placeholder="Pet Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="pet-type"
                  placeholder="Pet Type"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="pet-breed"
                  placeholder="Pet Breed"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <textarea
                  name="add-info"
                  placeholder="Additonal info about pet"
                  onChange={handleChange}
                ></textarea>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerAccount;
