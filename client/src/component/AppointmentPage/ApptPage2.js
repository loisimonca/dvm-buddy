import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import { set } from "mongoose";


const  AppointmentPage = () => {
  // const [availAppts, setAvailAppts] = useState([]);
  // const startDate = moment().add(1, "d").format("YYYY-MM-DD");
  
  // const getAppointments =  () => {
  //   API.getAvailAppts()
  //   .then((response) => {
  //     setAvailAppts(response.data)
  //     console.log(response);
  //   })
  //   .catch((err)=>console.error(err));
  // };

  // useEffect(() => {
  //   getAppointments();
  // },[]);


  // function createTable() {
  //   const table = [];

  //   const newArray = availAppts.reduce((r, a) => {
  //     r[a.apptDate] = r[a.apptDate] || [];
  //     r[a.apptDate].push({ time: a.apptTime, id: a._id });
  //     return r;
  //   }, {});

  //   console.log("new array is ", newArray);

  //   for (let slots in newArray) {
  //     let children = [];
  //     let header = slots;

  //     //available time slots
  //     newArray[slots].map((item) => {
  //       children.push(
  //         <li className="button is-small m-1" key={item.id}>
  //           {" "}
  //           {item.time}{" "}
  //         </li>
  //       );
  //       return children;
  //     });

  //     table.push(
  //       <ul className="box">
  //         <h1 className="title"> {header} </h1> {children}{" "}
  //       </ul>
  //     );
  //   }
  //   console.log(table);
  //   return table;
  // }

  return
  (
  <div className="container">
    {/* <section className="section">
      <h1 className="title">Available Schedules</h1>
      <div className="container">
        <div className="column is-one-third">
          <input type="date" name="" id="" value={startDate} />
        </div>
        <div className="column is-one-third"> {createTable()} </div>
      </div>
    </section> */}
  </div>
  );
};

export default AppointmentPage;
