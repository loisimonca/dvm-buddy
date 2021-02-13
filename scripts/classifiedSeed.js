const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const classifiedSeed = [
  {
    category: "Walker",
    details: "Side Walk category selected. Description goes here",
    name: "Claude",
    tel: 9392438295,
    email: "test1@gmail.com",
    zipCode: 30320,
  },
  {
    category: "Sitter",
    details: "Boarding category selected. Description goes here",
    name: "Samuel",
    tel: 2542613565,
    email: "test2@gmail.com",
    zipCode: 30120,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "SpongeBob",
    tel: 2542613565,
    email: "test3@gmail.com",
    zipCode: 30519,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Mr. Krabs",
    tel: 2542613565,
    email: "test4@gmail.com",
    zipCode: 60067,
  },
  {
    category: "Walker",
    details: "Boarding category selected. Description goes here",
    name: "Squidward",
    tel: 2542613565,
    email: "test5@gmail.com",
    zipCode: 30519,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Dexter",
    tel: 2542613565,
    email: "test6@gmail.com",
    zipCode: 30019,
  },
  {
    category: "Sitter",
    details: "Boarding category selected. Description goes here",
    name: "Courage",
    tel: 2542613565,
    email: "test7@gmail.com",
    zipCode: 30058,
  },
  {
    category: "Sitter",
    details: "Boarding category selected. Description goes here",
    name: "Doug Funnie",
    tel: 2542613565,
    email: "test8@gmail.com",
    zipCode: 30066,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Bugs Bunny",
    tel: 2542613565,
    email: "test9@gmail.com",
    zipCode: 30519,
  },
  {
    category: "Walker",
    details: "Boarding category selected. Description goes here",
    name: "Johnny Bravo",
    tel: 2542613565,
    email: "test10@gmail.com",
    zipCode: 30087,
  },
  {
    category: "Walker",
    details: "Boarding category selected. Description goes here",
    name: "Tommy Pickles",
    tel: 2542613565,
    email: "test11@gmail.com",
    zipCode: 31519,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Rocko",
    tel: 2542613565,
    email: "test12@gmail.com",
    zipCode: 30318,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Captain Planet",
    tel: 2542613565,
    email: "test13@gmail.com",
    zipCode: 32119,
  },
  {
    category: "Boarding",
    details: "Boarding category selected. Description goes here",
    name: "Ickis",
    tel: 2542613565,
    email: "test14@gmail.com",
    zipCode: 30005,
  },
];

db.Classified.remove({})
  .then(() => db.Classified.collection.insertMany(classifiedSeed))
  .then((data) => {
    console.log(data.result.n + " classified records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
