const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

router.route("/").post(appointmentsController.insert);
router.route("/").get(appointmentsController.findAllAvail);
router.route("/:id").get(appointmentsController.findOneAppt);
router.route("/customer/:id").get(appointmentsController.findApptByCust);
router.route("/:id").delete(appointmentsController.delete);
router.route("/:id").put(appointmentsController.setAppointment);





module.exports = router;