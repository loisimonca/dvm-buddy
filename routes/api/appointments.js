const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");


router
.route("/")
.get(appointmentsController.findAll)
.post(appointmentsController.create);

router.route("/:id").get(appointmentsController.findOneById);
router.route("/:id").delete(appointmentsController.remove);



module.exports = router;
