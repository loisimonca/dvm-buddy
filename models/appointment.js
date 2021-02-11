const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    apptDate: String,
    apptTime: String,
    user: { 
      type: Schema.ObjectId, 
      ref: "user" },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  });

  const Appointment = mongoose.model("Appointment", appointmentSchema);

  module.exports = Appointment;