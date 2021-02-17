import React, { useState } from "react";
import EmployeeManagePage from "./EmployeeAccountParts/EmployeeManagePage";
import PatientInfoPage from "./EmployeeAccountParts/PatientInfoPage";
import EmployeePage from "./EmployeeAccountParts/EmployeePage";
import Documents from "./Documents";
import "./EmployeeAccountSelectBar.css";

function EmployeeAccountSelectBar({ userData, setUserData }) {
  const [state, setState] = useState("personal-info");
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleClick = (e) => {
    const target = e.target.name;

    setState(target);
    if (target == "personal-info") {
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(true);
    } else if (target == "documents") {
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(true);
    } else if (target == "patient-info") {
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(false);
    } else if (target == "employee-info") {
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setActive4(false);
    }
  };
  return (
    <>
      <div className="tabs is-centered">
        {/* <div id="sidebar" class="is-hidden-mobile"> */}
        <ul>
          <li
            value="personal-info"
            className={active1 ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="personal-info">Personal Information</a>
            </strong>
          </li>
          <li
            value="patient-info"
            className={active2 ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="patient-info">Patient Information</a>
            </strong>
          </li>
          <li
            className={active3 ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="employee-info">Employee Management</a>
            </strong>
          </li>
          <li
            className={active4 ? "activeBtn" : "inactive"}
            onClick={handleClick}
          >
            <strong>
              <a name="documents">Documents</a>
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
      {state === "documents" && <Documents />}
    </>
  );
}

export default EmployeeAccountSelectBar;
