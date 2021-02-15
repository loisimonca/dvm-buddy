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

  //api call to retrieve list of appointments from server

  function getAppointments() {
    API.listAllAppointments().then((response) => {
      const filteredData = response.data.filter(
        (appointment) => appointment.apptDate >= defaultDate
      );
      setAppointments(filteredData);
      setAppointmentList(filteredData);
    });
  }

  const [inEditMode, setinEditMode] = useState({
    status: false,
    rowKey: null,
  });
  //hold customer id of row being edited
  const [customerId, setcustomerId] = useState(null);

  const onEdit = ({ _id, currentCustomerId }) => {
    setinEditMode({
      status: true,
      rowKey: _id,
    });
    setcustomerId(currentCustomerId);
  };

  const updateAppointment = ({ _id, newCustomerId }) => {
    API.setAppt(_id, newCustomerId)
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  };

  const defaultDate = moment().format("YYYY-MM-DD");

  //get list of appointments from server
  const getApptlist = () => {
    API.listAllAppointments()
      .then((response) => {
        const data = response.data;
        setAppointmentList(data);
        console.log("resp ", response.data);
      })
      .catch((err) => console.error(err));
  };

  const onSave = ({ _id, newCustomerId }) => {
    updateAppointment({ _id, newCustomerId });
  };

  const onCancel = () => {
    setinEditMode({
      status: false,
      rowKey: null,
    });
    setcustomerId(null);
  };

  useEffect(() => {
    getAppointments();
    getApptlist();
  }, []);


  return (
    <div className="container">
      <div className="section">
        <>
          <table className="table">
            <thead>
              <tr>
                <th>_id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Customer Email</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.apptDate}</td>
                    <td>{item.apptTime}</td>
                    <td>{item.user ? item.user.email : ""}</td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item.id ? (
                        <>
                          <button
                            className={"button is-success"}
                            onClick={() =>
                              onSave({
                                id: item._id,
                                newCustomerId: customerId,
                              })
                            }
                          >
                            Save
                          </button>

                          <button
                            className={"button is-secondary"}
                            style={{ marginLeft: 8 }}
                            onClick={() => onCancel()}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className={"button is-primary"}
                          onClick={() =>
                            onEdit({
                              id: item._id,
                              currentCustomerId: item.customerId,
                            })
                          }
                        >
                          Edit
                        </button>
                      )}
                    </td>
                    <td>
                        <button className="button">
                            Delete
                        </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
};

export default AppointmentEditPage;
