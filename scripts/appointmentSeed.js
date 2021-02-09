const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/dvm-buddy");
const apptSeed = [
    {
     email: "peterpan@gmail.com",
     slots: mongoose.Types.ObjectId("601c1d58ad99a28fa9f5d1cc")   
    }
];

db.Appointment.deleteMany({})
.then(() => db.Appointment.collection.insertMany(apptSeed))
.then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0)
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});