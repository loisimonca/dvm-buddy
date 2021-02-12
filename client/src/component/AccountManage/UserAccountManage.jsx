import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EditFunction from "./EditFunction";

function UserAccountManage({ userData, setUserData }) {
  const [originalData, setOriginalData] = useState();
  const [editOpen, setEditOpen] = useState({
      tel: false,
      emergencyName: false,
  });
  useEffect(() => {
    setOriginalData(userData);
  },[userData._id]);
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.name === "tel") {
      setUserData({ ...userData, tel: e.target.value });
    }else if (e.target.name === "emergencyName") {
        setUserData({ ...userData, emergencyName: e.target.value });
    }else if (e.target.name === "emergencyTel") {
        setUserData({ ...userData, emergencyTel: e.target.value });
    }else if (e.target.name === "petName") {
        setUserData({ ...userData, petName: e.target.value });
    }else if (e.target.name === "petType") {
        setUserData({ ...userData, petType: e.target.value });
    }else if (e.target.name === "petBreed") {
        setUserData({ ...userData, petBreed: e.target.value });
    }else if (e.target.name === "addInfo") {
        setUserData({ ...userData, addInfo: e.target.value });
    }
  };
  const EditOpen = (e) => {
    e.preventDefault();
    const targetEl= e.target.name
    if(targetEl === 'tel'){
        setEditOpen({...editOpen, tel: !editOpen.tel});
        setUserData({...userData, tel: originalData.tel})
    }else if(targetEl === 'emergencyName'){
        setEditOpen({...editOpen, emergencyName: !editOpen.emergencyName});
        setUserData({...userData, emergencyName: originalData.emergencyName})
    }else if(targetEl === 'emergencyTel'){
      setEditOpen({...editOpen, emergencyTel: !editOpen.emergencyTel});
      setUserData({...userData, emergencyTel: originalData.emergencyTel})
    }else if(targetEl === 'petName'){
      setEditOpen({...editOpen, petName: !editOpen.petName});
      setUserData({...userData, petName: originalData.petName})
    }else if(targetEl === 'petType'){
      setEditOpen({...editOpen, petType: !editOpen.petType});
      setUserData({...userData, petType: originalData.petType})
    }else if(targetEl === 'petBreed'){
      setEditOpen({...editOpen, petBreed: !editOpen.petBreed});
      setUserData({...userData, petBreed: originalData.petBreed})
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let targetData;
    if(e.target.name === 'tel'){
        targetData = { tel : userData.tel }
    }else if(e.target.name === 'emergencyTel'){
        targetData = {emergencyTel : userData.emergencyTel}
    }else if(e.target.name === 'emergencyName'){
        targetData = {emergencyName : userData.emergencyName}
  
    }else if(e.target.name === 'petName'){
        targetData = {petName : userData.petName}
    }else if(e.target.name === 'petType'){
        targetData = {petType : userData.petType}
    }else if(e.target.name === 'petBreed'){
        targetData = {petBreed : userData.petBreed}
    }else if(e.target.name === 'addInfo'){
        targetData = {addInfo : userData.addInfo}
    }
    
    if (window.confirm("Do you want to update the information? ")) {
      API.updateUserById(userData._id, targetData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    window.location.reload();
  };

  return (
    <div className="account-manage-wrap">
      <div className="account-manage-container container">
        <h1 className="account-manage-title">Personal Info</h1>
        <div className="account-manage-item">
          FirstName :{" "}
          <span className="account-manage-input" name="firstName">
            {userData.firstName}
          </span>
        </div>
        <div className="account-manage-item">
          LastName :{" "}
          <span className="account-manage-input" name="lastName">
            {userData.lastName}
          </span>{" "}
        </div>

        <div className="account-manage-item">
          Contact Number :{" "}
          <EditFunction target={'tel'} editOpen={editOpen.tel} EditOpen={EditOpen} handleChange={handleChange} userData={userData.tel} handleSubmit={handleSubmit}/>
        </div>

        <div className="account-manage-item">
          User Email :{" "}
          <span
            className="account-manage-input"
            name="email"
            onChange={handleChange}
          >
            {userData.email}{" "}
          </span>
        </div>
        <div className="account-manage-item">Password : **** </div>
        <div className="account-manage-item">
          Emergency Contact Name :{" "}
          <EditFunction target={'emergencyName'} editOpen={editOpen.emergencyName} EditOpen={EditOpen} handleChange={handleChange} userData={userData.emergencyName} handleSubmit={handleSubmit}/>
        </div>
        <div className="account-manage-item">
          Emergency Contact :{" "}
          <EditFunction target={'emergencyTel'} editOpen={editOpen.emergencyTel} EditOpen={EditOpen} handleChange={handleChange} userData={userData.emergencyTel} handleSubmit={handleSubmit}/>
        </div>
        <div className="account-manage-item">
          Pet Name :{" "}
          <EditFunction target={'petName'} editOpen={editOpen.petName} EditOpen={EditOpen} handleChange={handleChange} userData={userData.petName} handleSubmit={handleSubmit}/>
        </div>
        <div className="account-manage-item">
          Pet Type :{" "}
          <EditFunction target={'petType'} editOpen={editOpen.petType} EditOpen={EditOpen} handleChange={handleChange} userData={userData.petType} handleSubmit={handleSubmit}/>
        </div>
        <div className="account-manage-item">
          Pet Breed :{" "}
          <EditFunction target={'petBreed'} editOpen={editOpen.petBreed} EditOpen={EditOpen} handleChange={handleChange} userData={userData.petBreed} handleSubmit={handleSubmit}/>
        </div>
        <div className="account-manage-item">
          More Info About Pet :{" "}
          <textarea
            className="account-manage-input"
            name="addInfo"
            onChange={handleChange}
            defaultValue={userData.addInfo}
            /
          >
          <button name="addInfo" onClick={handleSubmit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserAccountManage;
