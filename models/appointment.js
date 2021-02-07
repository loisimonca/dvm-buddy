const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    customer: {
        type: Schema.ObjectId,
        ref: "user"
    },
    slots: { 
      type: Schema.ObjectId, 
      ref: "Slot" },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  });

  const Appointment = mongoose.model("Appointment", appointmentSchema);

  module.exports = Appointment;