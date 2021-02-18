const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //works
  findAllAvail: (req, res) => {
    db.Appointment.find({})
      .where({ user: null })
      .sort({ apptDate: 1, apptTime: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  findOneAppt: (req, res) => {
    db.Appointment.findById(req.params.id)
      .populate("user", "email")
      .then((appointment) => res.json(appointment))
      .catch((err) => res.status(422).json(err));
  },
  //works
  findApptByCust: (req, res) => {
    db.Appointment.find({})
      .where({ user: mongoose.Types.ObjectId(req.params.id) })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  delete: (req, res) => {
    db.Appointment.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id))
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  insert: (req, res) => {
    db.Appointment.collection
      .insertOne({
        apptDate: req.body.apptDate,
        apptTime: req.body.apptTime,
        user: req.body.user,
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  setAppointment: (req, res) => {
    console.log(req.body.user);
    db.Appointment.findByIdAndUpdate(
      req.params.id,
      {
        user: mongoose.Types.ObjectId(req.body.user),
      },
      { new: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  setAppointmentByEmail: (req, res) => {
    const apptId = req.body.apptId;
    console.log("apptId is ", apptId);
    db.User.findOne({ email: req.params.email })
      .then((user) => {
        console.log("server userId is ", user);
        console.log("server req.body.id is ", apptId);
        db.Appointment.findByIdAndUpdate(
          req.body.apptId,
          {
            user: mongoose.Types.ObjectId(user._id),
          },
          {
            new: true,
          }
        )
          .then((response) => res.json(response))
          .catch((err) => console.error(err));
      })
      // .then(appointment => res.json(appointment))
      .catch((err) => console.log(err));
  },
  findAll: (req, res) => {
    db.Appointment.find()
      .populate("user", "email")
      .sort({apptDate: 1, apptTime: 1})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
