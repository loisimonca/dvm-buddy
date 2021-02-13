var zipcodes = require("zipcodes");
const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.Classified.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },
  findZipcode: function (req, res) {
    db.Classified.find().then((data) => {
      const reqZipCode = req.params.zip;
      const distance = req.params.distance;
      const zipQuery = req.params.query;
      let result = [];
      data.map((service) => {
        const diff = zipcodes.distance(reqZipCode, service.zipCode);
        if (service.category === zipQuery) {
          if (diff <= distance) {
            result.push(service);
          }
        }
      });
      console.log(result);
      res.json(result);
    });
  },
  findById: function (req, res) {
    db.Classified.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Classified.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Classified.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Classified.findById({ _id: req.params.id })
      .then((data) => data.remove())
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
