const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  findAllUser: function (req, res) {
    db.User.find({ userType: "User" })
      .then((user) => {
        console.log(user);
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },
  findAllEmployee: function (req, res) {
    db.User.find({ userType: "Employee" })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User.findOne({ email: req.params.email })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  createGoogleFacebook: function (req, res) {
    db.User.create(req.body)
      .then((user) => {
        res.json({
          userType: user.userType,
          userId: user._id,
          name: user.firstName,
        });
      })
      .catch((error) => {
        res.status(422).json(error);
      });
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((user) => {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNATURE, {
          expiresIn: 60 * 60,
        });
        res.json({
          userType: user.userType,
          token: token,
          userId: user._id,
          name: user.firstName,
        });
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
    db.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
