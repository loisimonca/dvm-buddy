const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    email: {
        type: String,
    },
    slots: { 
      type: Schema.ObjectId, 
      ref: "slot" },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  });

  const Appointment = mongoose.model("Appointment", appointmentSchema);

  module.exports = Appointment;