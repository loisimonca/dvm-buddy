//ObjectId("602475602a3f382c5ff09dac")

const mongoose = require("mongoose");
const db = require("../models");
const { Schema } = require("../models/user");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const apptSeed = [
  {
    apptDate: "2021-02-11",
    apptTime: "08:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "08:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "08:40",
    user: null,
  },

  {
    apptDate: "2021-02-11",
    apptTime: "09:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "09:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "09:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "10:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "10:20",
    user: mongoose.Types.ObjectId("602475602a3f382c5ff09dac"),
  },
  {
    apptDate: "2021-02-11",
    apptTime: "10:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "11:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "11:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "11:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "12:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "12:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "12:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "13:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "13:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "13:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "14:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "14:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "14:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "15:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "15:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "15:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "16:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "16:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "16:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "17:00",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "17:20",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "17:40",
    user: null,
  },
  {
    apptDate: "2021-02-11",
    apptTime: "18:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "08:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "08:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "08:40",
    user: null,
  },

  {
    apptDate: "2021-02-12",
    apptTime: "09:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "09:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "09:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "10:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "10:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "10:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "11:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "11:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "11:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "12:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "12:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "12:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "13:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "13:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "13:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "14:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "14:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "14:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "15:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "15:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "15:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "16:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "16:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "16:40",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "17:00",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "17:20",
    user: null,
  },
  {
    apptDate: "2021-02-12",
    apptTime: "17:40",
    user: null,
  },
  {
    apptDate: "2021-02-15",
    apptTime: "15:20",
    user: null,
  },
  {
    apptDate: "2021-02-15",
    apptTime: "15:40",
    user: null,
  },
  {
    apptDate: "2021-02-15",
    apptTime: "16:00",
    user: null,
  },
  {
    apptDate: "2021-02-15",
    apptTime: "16:20",
    user: null,
  },
  {
    apptDate: "2021-02-16",
    apptTime: "16:40",
    user: null,
  },
  {
    apptDate: "2021-02-16",
    apptTime: "17:00",
    user: null,
  },
  {
    apptDate: "2021-02-17",
    apptTime: "17:20",
    user: null,
  },
  {
    apptDate: "2021-02-17",
    apptTime: "17:40",
    user: null,
  },
  {
    apptDate: "2021-02-18",
    apptTime: "11:00",
    user: null,
  },
  {
    apptDate: "2021-02-18",
    apptTime: "09:20",
    user: null,
  },
  {
    apptDate: "2021-02-19",
    apptTime: "17:40",
    user: null,
  },
   {
    apptDate: "2021-02-19",
    apptTime: "17:00",
    user: null,
  },
  {
    apptDate: "2021-02-20",
    apptTime: "9:20",
    user: null,
  },
  {
    apptDate: "2021-02-20",
    apptTime: "13:40",
    user: null,
  },
];

db.Appointment.deleteMany({})
  .then(() => db.Appointment.collection.insertMany(apptSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
