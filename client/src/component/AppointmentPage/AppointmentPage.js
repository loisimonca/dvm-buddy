import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import "./AppointmentPage.css";

// import { relativeTimeRounding } from "moment";
// import Wrapper from "../Wrapper/Wrapper";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [oAppointments, setoAppointments] = useState([]);

  const defaultDate = moment().format("YYYY-MM-DD");
  const defaultTime = moment().format("HH:mm");
  const userId = sessionStorage.getItem("userId").replace(/"/g, "");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmedAppointment, setconfirmedAppointment] = useState({});

  const [appointmentChoice, setAppointmentChoice] = useState("");

  useEffect(() => {
    API.getAvailAppts()
      .then((response) => {
        const filteredData = response.data.filter(
          (appointment) =>
            appointment.apptDate >= defaultDate &&
            appointment.apptTime > defaultTime
        );
        setAppointments(filteredData);
        setoAppointments(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  //filters available appointments list based on date input
  const filterAppointments = (date) => {
    // console.log("date input is ", date);
    const filteredData = oAppointments.filter(
      (appointment) =>
        appointment.apptDate >= date && appointment.apptTime > defaultTime
    );
    setAppointments(filteredData);
  };

  function handleAppointmentConfirmation(apptDate, apptTime, scheduleId) {
    const formattedDisplayDate = moment(apptDate, "YYYY-MM-DD").format(
      "dddd, MMMM Do YYYY"
    );
    const formattedDisplayTime = moment(apptTime, "HH:mm").format("h:mm a");

    setconfirmedAppointment({ formattedDisplayDate, formattedDisplayTime });
    setAppointmentChoice(scheduleId); //set appointment id for later use for updating db

    // console.log(confirmedAppointment);

    setModalIsOpen(true);
  }

  //table that holds all available appointments
  function createTable() {
    const table = [];

    // console.log("calling availAppoints from createTable ", appointments);
    // console.log("userid is ", userId);

    const newAppointmentArray = appointments.reduce((r, a) => {
      r[a.apptDate] = r[a.apptDate] || [];
      r[a.apptDate].push({ time: a.apptTime, id: a._id });
      return r;
    }, {});

    // console.log("New Appointment Array is ", newAppointmentArray);

    for (let slots in newAppointmentArray) {
      let children = [];
      let dateHeader = slots;

      newAppointmentArray[slots].map((item, index) => {
        children.push(
          <li
            key={index}
            className="button is-small m-1"
            data-id={item.id}
            key={item.id}
            data-display-date={slots}
            data-display-time={item.time}
            onClick={(e) =>
              handleAppointmentConfirmation(
                e.target.getAttribute("data-display-date"),
                e.target.getAttribute("data-display-time"),
                e.target.getAttribute("data-id")
              )
            }
          >
            {" "}
            {item.time}{" "}
          </li>
        );
        return children;
      });

      table.push(
        <ul className="box AppBox ">
          <h1 className="title is-size-4 dateTitle">
            {" "}
            {moment(dateHeader, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}{" "}
          </h1>{" "}
          {children}{" "}
        </ul>
      );
    }
    return table;
  }

  //save user appointment choice
  function handleSaveAppointment() {
    // console.log("save button click");
    // console.log("appointment choice", appointmentChoice);
    // console.log("userId ", userId);

    API.setAppt(appointmentChoice, userId)
      .then((resp) => console.log(resp))
      .then(setModalIsOpen(false))
      .catch((err) => console.log(err));
  }

  return (
    <div className="containerAPP">
      <section className="section">
        <h1 className="titleSchedules is-size-3"> Available Schedules</h1>
        <div className="container is-centered appointmentContainer">
          <div className="column is-half">
            <p
              className="search-available-dates"
              htmlFor="appointment-filter"
              // className="label"
            >
              Search from:
            </p>

            <input
              className="dateInput"
              type="date"
              defaultValue={defaultDate}
              onChange={(e) => filterAppointments(e.target.value)}
              name="appointment-filter"
              min={defaultDate}
            />
          </div>
          <div className="column is-mobile is-centered is-four-fifths ">
            {createTable()}
          </div>
        </div>
      </section>

      <div className={`modal ${modalIsOpen ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"> Appointment Confirmation</p>
          </header>
          <section className="modal-card-body">
            <p>
              Please verify this is the date and time you would like to schedule
              your appointment for.
            </p>
            <br />
            <br />
            <p>Appointment Date: {confirmedAppointment.formattedDisplayDate}</p>
            <p>Appointment Time: {confirmedAppointment.formattedDisplayTime}</p>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button"
              type="submit"
              onClick={() => handleSaveAppointment()}
            >
              Schedule
            </button>
            <button className="button" onClick={() => setModalIsOpen(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
