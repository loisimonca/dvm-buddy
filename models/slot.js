const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slot_date: String,
  slot_time: String,
  user: {
    type: Schema.ObjectId,
    ref: "user"
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});


const Slot = mongoose.model("Slot",slotSchema)

module.exports = Slot;