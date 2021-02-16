import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import "../AccountManage.css";

export default function PatientInfoPage() {
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    API.getUser().then((res) => {
      setPatient(res.data);
      console.log(patient);
    });
  }, []);
  return (
    <div className="account-manage-container container">
      <h1 className="account-manage-title is-size-3 ">Patient Information</h1>
      {patient &&
        patient.map((data) => (
          <div className="patient-info-wrap">
            <div className="account-manage-item">
              Name :
              <span className="account-manage-input" name="lastName">
                {data.firstName} {data.lastName}
              </span>
            </div>
            <div className="account-manage-item">
              Contact Number: {data.tel}
            </div>

            <h4>EMAIL: {data.email}</h4>
          </div>
        ))}
    </div>
  );
}
