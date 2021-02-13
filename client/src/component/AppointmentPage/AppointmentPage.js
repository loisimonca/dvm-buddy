import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const defaultDate = moment().format("YYYY-MM-DD");
  const defaultTime = moment().format("HH:mm");
  const userId = localStorage.getItem("userId");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmedAppointment, setconfirmedAppointment] = useState({});

  useEffect(() => {
    API.getAvailAppts()
      .then((response) => {
        const filteredData = response.data.filter(
          (appointment) =>
            appointment.apptDate >= defaultDate &&
            appointment.apptTime > defaultTime
        );
        setAppointments(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);


  //filters available appointments list based on date input
  const filterAppointments = (date) => {
    console.log("date input is ", date);
    const filteredData = appointments.filter(
      (appointment) =>
        appointment.apptDate >= date && appointment.apptTime > defaultTime
    );
    setAppointments(filteredData);
  };


  function handleAppointmentConfirmation(apptDate, apptTime, scheduleId) {
    const formattedDisplayDate = moment(apptDate, "YYYY-MM-DD").format(
      "dddd, MMMM do YYYY"
    );
    const formattedDisplayTime = moment(apptTime, "HH:mm").format("h:mm a");

    setconfirmedAppointment({ formattedDisplayDate, formattedDisplayTime });

    console.log(confirmedAppointment);

    setModalIsOpen(true);
  }

  //table that holds all available appointments
  function createTable() {
    const table = [];

    console.log("calling availAppoints from createTable ", appointments);
    console.log("userid is ", userId);

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

          <li
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
        <ul className="box">
          <h1 className="title">
            {" "}
            {moment(dateHeader, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}{" "}
          </h1>{" "}
          {children}{" "}
        </ul>
      );
    }

    function confirmAppt(params) {}


    // console.log(table);
    return table;
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className="title"> Available Schedules</h1>
        <div className="container">
          <div className="column is-half">
            <label htmlFor="appointment-filter" className="label">
              Search from:
            </label>
            <hr></hr>
            <input
              type="date"
              defaultValue={defaultDate}
              onChange={(e) => filterAppointments(e.target.value)}
              name="appointment-filter"
            />
          </div>
          <div className="column is-four-fifths">{createTable()}</div>
        </div>
      </section>
      <div className="container">
        <div className="column is-one-third">
          <Modal isOpen={modalIsOpen}
          style={{
            overlay: {
              backgroundColor: 'grey'
            }
          }}>
            <h1 className="title">Appointment Confirmation</h1>
            <p>
              Please verify this is the date and time you would like to schedule
              your appointment for. If correct click the Schedule button or
              click the cancel buttom to start over
            </p>
            <br />
            <br />
            <p>Appointment Date: {confirmedAppointment.formattedDisplayDate}</p>
            <p>Appointment Time: {confirmedAppointment.formattedDisplayTime}</p>

            <button type="button">Schedule</button>
            <button type="button" onClick={() => setModalIsOpen(false)}>
              Cancel
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
