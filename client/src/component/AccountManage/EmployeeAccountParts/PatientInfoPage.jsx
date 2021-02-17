import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import "../AccountManage.css";

export default function PatientInfoPage() {
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    API.getUser().then((res) => {
      setPatient(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="account-manage-container container">
      <h1 className="account-manage-title is-size-3 ">Patient Information</h1>

      {patient &&
        patient.map((data) => (
          <div className="patient-info-wrap">
            <div className="account-manage-item">
              <strong>Name : </strong>
              <span className="account-manage-input" name="lastName">
                {data.firstName} {data.lastName}
              </span>
            </div>
            <div className="account-manage-item">
              <strong>Contact Number: </strong>{data.tel}
            </div>

            <div className="account-manage-item">
              <strong>Email : </strong>
              {data.email}</div>
            <div className="account-manage-item">
              <strong>Pet Info </strong>
              <div className='account-manage-item-sub'>
                <strong>Name : </strong> {data.petName} <strong>/ Type : </strong> {data.petType} <strong>/ Breed : </strong>{data.petBreed} 
              </div>
            </div>
   
            <div className="account-manage-item">
              <strong>Emergency Contact : </strong>
              {data.emergencyName} [{data.emergencyTel}]</div>
 
          </div>
        ))}
    </div>
  );
}
