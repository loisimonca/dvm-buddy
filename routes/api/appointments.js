const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

router
.route("/")
.get(appointmentsController.findAllAvail)
.post(appointmentsController.create);

router.route("/:userId").get(appointmentsController.findApptByCust);
router.route("/:apptId").delete(appointmentsController.delete);
router.route("/").put(appointmentsController.setAppointment);





module.exports = router;