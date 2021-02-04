const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((user) => user.remove())
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
