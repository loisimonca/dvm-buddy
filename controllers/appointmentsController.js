const db = require("../models");

module.exports = {
  findAllAvail: (req, res) => {
    db.Appointment.find({ User: null })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findApptByCust: (req, res) => {
    db.Appointment.find({ User: req.body.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Appointment.findByIdAndRemove(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Appointment.Save({
      apptDate: req.body.apptDate,
      apptTime: req.body.apptTime,
    });

  },
  setAppointment: (req, rest) => {
    db.Appointment.findOneAndUpdate(
      { apptDate: req.body.date, apptTime: req.body.time },
      {
        user: req.body.userId,
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};