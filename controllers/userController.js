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
      .catch((error, doc, next) => {
        if (
          error.keyValue.email != null &&
          error.name === "MongoError" &&
          error.code === 11000
        ) {
          res.json("Email must be unique");
          console.log({ error: "Email must be unique" });
        } else {
          res.json({ error: "Not found any idea, search for another reasons" });
          // console.log("not found any idea, search for another reasons");
        }
      });
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
