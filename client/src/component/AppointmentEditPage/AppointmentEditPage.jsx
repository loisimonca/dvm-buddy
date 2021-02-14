import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const AppointmentEditPage = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const getApptlist = () => {
    API.listAllAppointments()
      .then((appointments) => appointments.json())
      .then((json) => setAppointmentList(json));
  };

  useEffect(() => {
    getApptlist();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Customer Email</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Customer Email</th>
          </tr>
        </tfoot>
        <tbody>
            {appointmentList.map((item) => {
                <tr key={item._id}>
                    <td>{item.apptDate}</td>
                    <td>{item.apptTime}</td>
                    <td>{item.user.email}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentEditPage;
