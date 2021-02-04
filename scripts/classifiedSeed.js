const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const classifiedSeed = [
  {
    category: "Side Walk",
    details: "Side Walk category selected. Description goes here",
    name: "Claude",
    tel: 9392438295,
    email: "test3@gmail.com",
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Samuel",
    tel: 2542613565,
    email: "test4@gmail.com",
  },
];

db.Classified.remove({})
  .then(() => db.Classified.collection.insertMany(classifiedSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
