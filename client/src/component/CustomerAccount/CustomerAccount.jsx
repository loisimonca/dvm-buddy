import React, { useState } from "react";
import "./CustomerAccount.css";
import API from "../../utils/API";
import {numberOnly, pwdMustContain, emailVal} from './regexSet';

const CustomerAccount = () => {
  const [match, setMatch ] = useState(false);
  const [userInfo, setUserInfo] = useState({userType: "User"})
  const handleChange = function(e){
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if (id === "f-name") {
      setUserInfo({ ...userInfo, firstName: value });
    } else if (id === "l-name") {
      setUserInfo({ ...userInfo, lastName: value });
    } else if (id === "u-name") {
      setUserInfo({ ...userInfo, username: value });
    } else if (id === "tel") {
      if (value==="" || numberOnly.test(value) === false) {
        setMatch({...match, tel: false})
      }else{
        setMatch({ ...match, tel:true})
        setUserInfo({ ...userInfo, tel: parseInt(value) })
      }
    } else if (id === "email") {
      if(value===""|| emailVal.test(value) === false){
        setMatch({...match, email: false})
      }else{
        setMatch({...match, email: true})
        setUserInfo({ ...userInfo, email: value });
      }
    } else if (id === "password") {
      if(value==="" || pwdMustContain.test(value) === false){
        setMatch({...match, pwd: false})
      }else{
        setMatch({ ...match, pwd: true})
        setUserInfo({ ...userInfo, password: value });
      }
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
  let errorMsg;
  //redirect to the home page after submit
  const handleSubmit = function (e) {
    e.preventDefault();
    API.createUser(userInfo)
      .then((res) => {
        console.log(res)
        if(res.data === "Email must be unique"){
          errorMsg= res.data
          alert(errorMsg)
        }else if(res.data ==='Something went wrong, please try again'){
          errorMsg = res.data
          alert(errorMsg)
        }else{
          window.location.replace('/')
        }
      })
      .catch((err) => console.log(err));
  };
  //confirm password
  const confirmPassword = function (e) {
    e.preventDefault();
    if(e.target.value === userInfo.password){
      setMatch({...match, password: true})
    }
    else{
      setMatch({...match, password: false})
    }
  };
  return (
    <div className='create-account-wrap'>
        <div className="create-account-container container">
          <i className="create-page-icon fas fa-paw"></i>
          <h1 className="account-create-header">Create your account</h1>
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
                  {match.tel? <small className='create-account-pass'>✔</small > : <small className='create-account-error'>Numbers only</small>}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
                  {match.email? <small className='create-account-pass'>✔</small> : <small className='create-account-error'>Not valid email address</small>}
              </div>

              <div className="input-container">
                <input
                  autoComplete='off'
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                  {match.pwd? <small className='create-account-pass'>✔</small> : <small className='create-account-error'>Minimum eight characters, at least one letter, one number and one special character</small>}
              </div>
              <div className="input-container">
                <input
                  autoComplete='off'
                  type="password"
                  name="pwdConfirm"
                  placeholder="Confirm Password"
                  onChange={confirmPassword}
                />
                  {match.password? <small className='create-account-pass'>Password match</small> : <small className='create-account-error'>Password is not match</small>}
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
              <h1 className='create-account-pet-title'>
                <i className="create-page-icon fas fa-paw"></i>Pet Information
              </h1>
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
                  placeholder="Additional info about pet"
                  onChange={handleChange}
                ></textarea>
              </div>
              <input className="create-account-submit-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    </div>
  );
};

export default CustomerAccount;
