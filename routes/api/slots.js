const router = require("express").Router();
const slotsController = require("../../controllers/slotsController");

router
.route("/")
.get(slotsController.findAll)
.post(slotsController.create);

module.exports = router;
