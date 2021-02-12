import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import axios from "axios";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const defaultDate = moment().format("YYYY-MM-DD");
  const defaultTime = moment().format("HH:mm");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    API.getAvailAppts()
      .then((response) => {

        const filteredData = response.data.filter((appointment) => appointment.apptDate >= defaultDate && appointment.apptTime > defaultTime);
        setAppointments(filteredData);
        

      })
      .catch((err) => console.log(err));
  }, []);


  const filterAppointments = (date) => {
    console.log("date input is ", date)
   const filteredData = appointments.filter((appointment) => appointment.apptDate >= date && appointment.apptTime > defaultTime);
        setAppointments(filteredData);
  }

  //table that holds all available appointments
  function createTable() {
  

  const table = [];

  console.log("calling availAppoints from createTable ", appointments);
  console.log('userid is ', userId);

  const newAppointmentArray = appointments.reduce((r, a) => {
    r[a.apptDate] = r[a.apptDate] || [];
    r[a.apptDate].push({ time: a.apptTime, id: a._id });
    return r;
  }, {});

  console.log("New Appointment Array is ", newAppointmentArray);

  for (let slots in newAppointmentArray) {
    let children = [];
    let dateHeader = slots;

    newAppointmentArray[slots].map((item) => {

      children.push(
        <li className="button is-small m-1"  data-id={item.id} key={item.id} 
        
        >
          {" "}
          {item.time}{" "}
        </li>
      );
      return children;
    });

    table.push(
      <ul className="box">
        <h1 className="title"> {moment(dateHeader,"YYYY-MM-DD").format("dddd, MMMM Do YYYY")} </h1> {children}{" "}
      </ul>
    );
  }

  // console.log(table);
  return table;
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className="title"> Available Schedules</h1>
        <div className="container">
          <div className="column is-half">
            <input 
            type="date" 
            defaultValue={defaultDate} 
            onChange={(e) => filterAppointments(e.target.value)}
            />
          </div>
          <div className="column is-four-fifths">{createTable()}</div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
