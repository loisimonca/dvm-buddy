const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.Classified.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
