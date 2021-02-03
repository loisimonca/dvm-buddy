const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const userSeed = [
  {
    firstName: "Songhee",
    lastName: "Yim",
    tel: 1234561234,
    email: "test@gmail.com",
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
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
