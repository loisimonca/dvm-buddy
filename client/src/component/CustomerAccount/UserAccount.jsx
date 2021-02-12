import React, { useState, useContext } from "react";
import "./CustomerAccount.css";
import API from "../../utils/API";
import { numberOnly, pwdMustContain, emailVal } from "./regexSet";
import {UserContext} from '../../utils/UserContext';
import CustomerAccount from './CustomerAccount'
import EmployeeAccount from './EmployeeAccount'

const UserAccount = () => {
  const {setValue, setToken, setUserId} = useContext(UserContext)
  const [match, setMatch] = useState(false);
  const [userInfo, setUserInfo] = useState({ userType: "User" });
  const [employeeCode, setEmployeeCode] = useState(null)
  const EmployeeAccountCode = 'employee-code-1234'

  const handleChange = function (e) {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if(id === 'account-for-manager-or-user'){
        setEmployeeCode(value);
        if(value === EmployeeAccountCode){
          setUserInfo({...userInfo, userType: "Employee"})
        }
    }
    if (id === "f-name") {
      setUserInfo({ ...userInfo, firstName: value });
    } else if (id === "l-name") {
      setUserInfo({ ...userInfo, lastName: value });
    } else if (id === "u-name") {
      setUserInfo({ ...userInfo, username: value });
    } else if (id === "tel") {
      if (value === "" || numberOnly.test(value) === false) {
        setMatch({ ...match, tel: false });
      } else {
        setMatch({ ...match, tel: true });
        setUserInfo({ ...userInfo, tel: parseInt(value) });
      }
    } else if (id === "email") {
      if (value === "" || emailVal.test(value) === false) {
        setMatch({ ...match, email: false });
      } else {
        setMatch({ ...match, email: true });
        setUserInfo({ ...userInfo, email: value });
      }
    } else if (id === "password") {
      if (value === "" || pwdMustContain.test(value) === false) {
        setMatch({ ...match, pwd: false });
      } else {
        setMatch({ ...match, pwd: true });
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
        if (res.data === "Email must be unique") {
          errorMsg = res.data;
          alert(errorMsg);
        } else if (res.data === "Something went wrong, please try again") {
          errorMsg = res.data;
          alert(errorMsg);
        } else {
          
          setToken(res.data.token)
          setValue(res.data.userType)
          setUserId(res.data.userId)
          localStorage.setItem('token', JSON.stringify(res.data.token))
          localStorage.setItem('type', JSON.stringify(res.data.userType))
          localStorage.setItem('userId', JSON.stringify(res.data.userId))
          window.location.replace("/");
        }
      })
      .catch((err) => console.log(err));
  };
  //confirm password
  const confirmPassword = function (e) {
    e.preventDefault();
    if (e.target.value === userInfo.password) {
      setMatch({ ...match, password: true });
    } else {
      setMatch({ ...match, password: false });
    }
  };
  return (
      <>
      {employeeCode===EmployeeAccountCode ? <EmployeeAccount employeeCode={EmployeeAccountCode} match={match} confirmPassword={confirmPassword} handleSubmit={handleSubmit} handleChange={handleChange} /> 
        :<CustomerAccount match={match} confirmPassword={confirmPassword} handleSubmit={handleSubmit} handleChange={handleChange} />
        }
    </>
  );
};

export default UserAccount;
