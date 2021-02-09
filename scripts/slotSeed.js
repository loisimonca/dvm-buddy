const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dvm-buddy");
const slotSeed = [
  {
    slot_time: "7",
    slot_date: "2021-2-10",
    created_at: Date.now()
  },
  {
    slot_time: "8",
    slot_date: "2021-2-8",
    created_at: Date.now()
  },
  {
    slot_time: "9",
    slot_date: "2021-2-11",
    created_at: Date.now()
  },
  {
    slot_time: "10",
    slot_date: "2021-2-12",
    created_at: Date.now()
  },
  {
    slot_time: "11",
    slot_date: "2021-2-13",
    created_at: Date.now()
  },
  {
    slot_time: "12",
    slot_date: "2021-2-14",
    created_at: Date.now()
  },
  {
    slot_time: "13",
    slot_date: "2021-2-10",
    created_at: Date.now()
  },
  {
    slot_time: "14",
    slot_date: "2021-2-10",
    created_at: Date.now()
  },
  {
    slot_time: "15",
    slot_date: "2021-2-9",
    created_at: Date.now()
  },
  {
    slot_time: "16",
    slot_date: "2021-2-8",
    created_at: Date.now()
  },
  {
    slot_time: "6",
    slot_date: "2021-2-8",
    created_at: Date.now()
  },
  
];

db.Slot.remove({})
  .then(() => db.Slot.collection.insertMany(slotSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });