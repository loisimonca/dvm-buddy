import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import axios from "axios"

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const defaultDate = moment().add(1, "D").format("YYYY-MM-DD");

useEffect(() => {
  API.getAvailAppts().then((response) => {
    setAppointments(response.data)

    setAppointments((state) => {
      console.log("appointments state is ", state);
      return state;
    })
  })
  .catch((err) => console.log(err))
}, []);


  return (
    <div>
      <h1 className="title"> Schedule Appointment Page </h1>
      <p>
      </p>
    </div>
  );
};

export default AppointmentPage;
