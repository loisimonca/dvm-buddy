/*eslint-disable no-unused-expressions*/

import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import moment from "moment";

const AppointmentEditPage = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [appointments, setAppointments] = useState([
    {
      apptDate: "",
      apptTime: "",
      user: {
        email: "",
      },
    },
  ]);

  const defaultDate = moment().format("YYYY-MM-DD");

  const getApptlist = () => {
    API.listAllAppointments()
      .then((response) => {
        const data = response.data;
        setAppointmentList(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    API.listAllAppointments()
      .then((response) => {
        const filteredData = response.data.filter(
          (appointment) => appointment.apptDate >= defaultDate
        );
        setAppointments(filteredData);
        setAppointmentList(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  function createTableBody() {
    const table = [];
    let children = [];

    appointments.map((item) => {
      children.push(
        <tr key={item._id}>
          <td>{item.apptDate}</td>
          <td>{item.apptTime}</td>
          <td>{item.user ? item.user.email : ""}</td>
        </tr>
      );
      return children;
    });

    table.push(
        <>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Customer Email</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        </>
    );
    return table;
  }

  return (
    <div className="container">
        <div className="section">
        <table className="table">
      {createTableBody()}
      </table>
        </div>
     

    </div>
  );
};

export default AppointmentEditPage;
