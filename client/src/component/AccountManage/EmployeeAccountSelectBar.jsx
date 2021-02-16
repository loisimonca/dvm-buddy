import React, { useState } from "react";
import EmployeeManagePage from "./EmployeeAccountParts/EmployeeManagePage";
import PatientInfoPage from "./EmployeeAccountParts/PatientInfoPage";
import EmployeePage from "./EmployeeAccountParts/EmployeePage";
import "./EmployeeAccountSelectBar.css";

function EmployeeAccountSelectBar({ userData, setUserData }) {
  const [state, setState] = useState("personal-info");
  const [active, setActive] = useState();

  const handleClick = (e) => {
    const target = e.target.name;
    setState(target);
    // if (active.object[index] === target) {
    //   setActive(...active, target.object[index]);
    // } else {
    //   setActive = false;
  };
  return (
    <>
      <div className="tabs is-boxed is-centered">
        <ul>
          <li
            value="personal-info"
            className={active ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="personal-info">Personal Information</a>
            </strong>
          </li>
          <li
            id="2"
            className={active ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a id="3" name="patient-info">
                Patient Information
              </a>
            </strong>
          </li>
          <li
            id="4"
            className={active ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="employee-info">Employee Management</a>
            </strong>
          </li>
          <li className={active ? "activeBtn" : "inactive"}>
            <strong>
              <a>
                <span className="icon is-small">
                  <i className="far fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Documents</span>
              </a>
            </strong>
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
