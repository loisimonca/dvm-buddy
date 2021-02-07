const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

router
.route("/")
.get(appointmentsController.findAll)
.post(appointmentsController.create);

module.exports = router;
