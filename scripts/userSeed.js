const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const userSeed = [
  {
    userType: "Employee",
    firstName: "Songhee",
    lastName: "Yim",
    tel: 1234561234,
    email: "test@gmail.com",
    password: "aaaa",
    emergencyName: "Tim",
    emergencyTel: 3451234253,
    petName: "",
    petType: "",
    petBreed: "",
    addInfo: "",
  },
  {
    userType: "customer",
    firstName: "Peter",
    lastName: "Pan",
    tel: 1234561234,
    email: "peterpan@gmail.com",
    password: "aaaa",
    emergencyName: "Tim",
    emergencyTel: 3451234253,
    petName: "happy",
    petType: "dog",
    petBreed: "Golden Retriever",
    addInfo: "She is very friendly",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    // console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    // console.log(err);
    process.exit(1);
  });
