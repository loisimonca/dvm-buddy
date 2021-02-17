/*eslint-disable no-unused-expressions*/

import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import moment from "moment";
import TimeInput from './TimeInput'

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
  //post api call to add appointment time slot 
  const [addTime, setAddTime] = useState({
    apptDate: "",
    apptTime: "",
    user:null
  })
  const addTimeSlot = (e) =>{
    {e.target.name==='date' && setAddTime({...addTime, apptDate: e.target.value})}
    {e.target.name==='time' && setAddTime({...addTime, apptTime: e.target.value})}
    {e.target.name==='email' && setAddTime({...addTime, user: e.target.value})}
  }
  const submitAddTimeSlot=(e) =>{
    // if(addTime.user=""){
    //   setAddTime({...addTime, user: null})
    // }
    API.createAppt(addTime)
    .then(res =>{
      getAppointments()
    })
  }

  //api call to retrieve list of appointments from server
  const getAppointments = () => {
    API.listAllAppointments().then((response) => {
      const filteredData = response.data.filter(
        (appointment) => appointment.apptDate >= defaultDate
      );
      setAppointments(filteredData);
      // console.log("appointment list ", filteredData);
      //   setAppointmentList(filteredData);
    })
  };

  const [inEditMode, setinEditMode] = useState({
    status: false,
    rowKey: null,
  });
  //hold customer id of row being edited
  const [customerId, setcustomerId] = useState(null);

  //Edit Function
  const onEdit = ({ id, currentCustomerId }) => {
    setinEditMode({
      status: true,
      rowKey: id,
    });
    setcustomerId(currentCustomerId);
  };

  const updateAppointment = ({ id, email }) => {
    API.setApptByEmail({ id, email })
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
        // console.log("resp ", response.data);
      })
      .catch((err) => console.error(err));
  };

  // save function
  const onSave = ({ id, email }) => {
    updateAppointment({ id, email });
    console.log("id from react is ", id);
    console.log("email from react is ", email);
  };

  //cancel edit function
  const onCancel = () => {
    setinEditMode({
      status: false,
      rowKey: null,
    });
    setcustomerId(null);
  };

  //delete appointment function
  const handleDelete = (id) => {
    API.deleteAppt(id)
      .then(getAppointments())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAppointments();
    // getApptlist();
  }, []);

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">Edit Appointments</h1>
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Customer Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
            <input
              type="date"
              defaultValue={defaultDate}
              name="date"
              onChange={addTimeSlot}
              min={defaultDate}
            />
                </td>
                <td>
                <TimeInput onChange={addTimeSlot}/>
                </td>
                <td>
                  <input type="text" name="email" id="" onChange={addTimeSlot}/>
                </td>
                <td>
                  <button onClick={submitAddTimeSlot} className="button">Add</button>
                </td>
              </tr>
              {appointments.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.apptDate}</td>
                    <td>{item.apptTime}</td>
                    <td>{item.user ? item.user.email : ""}</td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        <input
                          value={customerId}
                          onChange={(e) => setcustomerId(e.target.value)}
                        />
                      ) : item.user ? (
                        item.user.email
                      ) : (
                        ""
                      )}
                    </td>

                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        <>
                          <button
                            className={"button is-success"}
                            onClick={() =>
                              onSave({ id: item._id, email: customerId })
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
                              currentCustomerId: item.user ? item.user._id : "",
                            })
                          }
                        >
                          Edit
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="button"
                        onClick={() => handleDelete(item._id)}
                      >
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
