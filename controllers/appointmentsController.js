const db = require("../models");
// const Nexmo = require("nexmo");

module.exports = {
  findAll: (req, res) => {
    db.Appointment.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
    findOne: (req,res) => {
      console.log(req.params.id)
      db.Appointment.findOne({customer: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  create: (req, res) => {
    const requestBody = req.body;
    console.log(requestBody);

    const newSlot = new db.Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date
    });
    // db.Slot.create(newSlot)
    newSlot.save();
    
    // Creates a new record from a submitted form
    const newAppointment = new db.Appointment({
      // name: requestBody.name,
      // phone: requestBody.phone,
      email: requestBody.email,
      slots: newSlot._id
    });

    // const nexmo = new Nexmo({
    //   apiKey: "YOUR_API_KEY",
    //   apiSecret: "YOUR_API_SECRET"
    // });

    let msg =
      requestBody.name +
      " " +
      "this message is to confirm your appointment at" +
      " " +
      requestBody.appointment;

    // and saves the record to
    // the data base
    newAppointment.save((err, saved) => {
      // Returns the saved appointment
      // after a successful save
      db.Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));

      // const from = VIRTUAL_NUMBER;
      // const to = RECIPIENT_NUMBER;

      // nexmo.message.sendSms(from, to, msg, (err, responseData) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.dir(responseData);
      //   }
      // });
    });
  }
};


