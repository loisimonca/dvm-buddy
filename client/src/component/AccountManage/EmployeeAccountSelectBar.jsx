import React, { useState } from "react";
import EmployeeManagePage from "./EmployeeAccountParts/EmployeeManagePage";
import PatientInfoPage from "./EmployeeAccountParts/PatientInfoPage";
import EmployeePage from "./EmployeeAccountParts/EmployeePage";
import "./EmployeeAccountSelectBar.css";

function EmployeeAccountSelectBar({ userData, setUserData }) {
  const [state, setState] = useState("personal-info");
  const handleClick = (e) => {
    const target = e.target.name;
    setState(target);
  };
  return (
    <>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active" onClick={handleClick}>
            <a name="personal-info">Personal Information</a>
          </li>
          <li onClick={handleClick}>
            <a name="patient-info">Patient Information</a>
          </li>
          <li onClick={handleClick}>
            <a name="employee-info">Employee Management</a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      {state === "personal-info" && (
        <EmployeePage userData={userData} setUserData={setUserData} />
      )}
      {state === "patient-info" && (
        <PatientInfoPage userData={userData} setUserData={setUserData} />
      )}
      {state === "employee-info" && (
        <EmployeeManagePage userData={userData} setUserData={setUserData} />
      )}
    </>
  );
}

export default EmployeeAccountSelectBar;
