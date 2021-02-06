const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const employeeSeed = [
  {
    firstName: "Lois",
    lastName: "Gabor",
    tel: 2463416346,
    email: "test2@gmail.com",
    password: "bbbb",
  },
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
