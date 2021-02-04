import React, {useState} from "react";
import  { Redirect } from 'react-router-dom'
import "./CustomerAccount.css";
import API from "../../utils/API";

const CustomerAccount = () => {
  const [userInfo, setUserInfo] = useState()
  const handleChange = function(e){
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if(id === 'f-name'){
      setUserInfo({...userInfo, firstName: value})
    }else if(id === 'l-name'){
      setUserInfo({...userInfo, lastName: value})
    }else if(id === 'tel'){
      setUserInfo({...userInfo, tel: parseInt(value)})
    }else if(id === 'email'){
      setUserInfo({...userInfo, email: value})
    }else if(id === 'password'){
      setUserInfo({...userInfo, password: value})
    }else if(id === 'emergency-name'){
      setUserInfo({...userInfo, emergencyName: value})
    }else if(id === 'emergency-tel'){
      setUserInfo({...userInfo, emergencyTel: parseInt(value)})
    }else if(id === 'pet-name'){
      setUserInfo({...userInfo, petName: value})
    }else if(id === 'pet-type'){
      setUserInfo({...userInfo, petType: value})
    }else if(id === 'pet-breed'){
      setUserInfo({...userInfo, petBreed: value})
    }else if(id === 'add-info'){
      setUserInfo({...userInfo, addInfo: value})
    }
  }
  //redirect to the home page after submit 
  const [redirect, setRedirect] = useState(null);
  const handleSubmit = function(e){
    e.preventDefault()
    API.createUser(userInfo)
    .then(res =>setRedirect("/"))
    .catch(err => console.log(err))
  }
  if(redirect){
    return <Redirect to={redirect} />
  }
  //confirm password
  const [pwdConfirm, setPwdConfirm] = useState();
  const confirmPassword = function(e){
    e.preventDefault()
    setPwdConfirm(e.target.value);
  }
  if(userInfo){
    if(pwdConfirm === userInfo.password){
      console.log(pwdConfirm)
    }else{
      console.log('not match')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            First Name :
            <input type="text" name="f-name" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Last Name:
            <input type="text" name="l-name" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Phone Number:
            <input type="text" name="tel" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Email: 
            <input type="text" name="email" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
          Password: 
            <input type="password" name="password" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
          Confirm Password: 
            <input type="password" name="password" onChange={confirmPassword}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Emergency Contact Name:
            <input type="text" name="emergency-name" onChange={handleChange} />
          </label>
        </div>
        <div className="input-container">
          <label>
            Emergency Contact Phone Number:
            <input type="text" name="emergency-tel" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Pet Name:
            <input type="text" name="pet-name" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Pet Type:
            <input type="text" name="pet-type" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Pet Breed:
            <input type="text" name="pet-breed" onChange={handleChange}/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Additional Information:
            <textarea name='add-info' placeholder="Hello there, this is some text in a text area" onChange={handleChange}>
            </textarea>
          </label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
};

export default CustomerAccount;
