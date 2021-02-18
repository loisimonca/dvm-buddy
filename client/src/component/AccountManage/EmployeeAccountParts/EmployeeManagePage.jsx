import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import "./EmployeePage.css";

function EmployeeManagePage() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    API.getEmployee().then((res) => {
      setEmployee(res.data);
    });
  }, []);
  return (
    <>
      <div className="account-manage-container">
        <h1 className="account-manage-title is-size-3">Employee Information</h1>
        {employee &&
          employee.map((data, index) => (
            <div key={index} className="employee-info-wrap">
              <h1>
                <strong>Name : </strong> {data.firstName} {data.lastName}
              </h1>
              <h1>
                <strong>Contact Number : </strong> {data.tel}
              </h1>
              <h1>
                <strong>Email : </strong> {data.email}
              </h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default EmployeeManagePage;
