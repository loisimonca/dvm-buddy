const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //works
  findAllAvail: (req, res) => {
    db.Appointment.find({})
      .where({ user: null })
      .then((dbModel) => res.json(dbModel))
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
        user: null,
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  setAppointment: (req, res) => {
    console.log(req.body.user);
    db.Appointment.findByIdAndUpdate(req.params.id, {
      user: req.body.user,
    },{new: true})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
