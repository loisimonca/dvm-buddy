import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import EditFunction from "../EditFunction";
import "./EmployeePage.css";

function EmployeePage({ userData, setUserData }) {
  const [originalData, setOriginalData] = useState();
  const [editOpen, setEditOpen] = useState({
    tel: false,
    emergencyName: false,
  });
  useEffect(() => {
    setOriginalData(userData);
  }, [userData._id]);
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.name === "tel") {
      setUserData({ ...userData, tel: e.target.value });
    }
  };
  const EditOpen = (e) => {
    e.preventDefault();
    const targetEl = e.target.name;
    if (targetEl === "tel") {
      setEditOpen({ ...editOpen, tel: !editOpen.tel });
      setUserData({ ...userData, tel: originalData.tel });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let targetData;
    if (e.target.name === "tel") {
      targetData = { tel: userData.tel };
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
    <div className="account-manage-container container">
      <h1 className="account-manage-title is-size-3">Personal Information</h1>
      <div className="account-manage-item">
        <strong>First Name : </strong>
        <span className="account-manage-input" name="firstName">
          {userData.firstName}
        </span>
      </div>
      <div className="account-manage-item">
        <strong>Last Name : </strong>
        <span className="account-manage-input" name="lastName">
          {userData.lastName}
        </span>{" "}
      </div>

      <div className="account-manage-item">
        <strong>Contact Number : </strong>
        <EditFunction
          target={"tel"}
          editOpen={editOpen.tel}
          EditOpen={EditOpen}
          handleChange={handleChange}
          userData={userData.tel}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="account-manage-item">
        <strong>User Email: </strong>
        <span
          className="account-manage-input"
          name="email"
          onChange={handleChange}
        >
          {userData.email}{" "}
        </span>
      </div>
      <div className="account-manage-item">
        {" "}
        <strong>Password: </strong> ****{" "}
      </div>
    </div>
  );
}

export default EmployeePage;
