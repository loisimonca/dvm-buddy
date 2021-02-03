const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
