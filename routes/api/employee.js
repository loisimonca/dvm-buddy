const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");
var adminPassport = require("../../config/adminPassport");
//Matches with '/api/employee
router
  .route("/login")
  .post(adminPassport.authenticate("local"), function (req, res) {
    res.json(req.body);
  });

router
  .route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

router
  .route("/:id")
  .get(employeeController.findById)
  .put(employeeController.update)
  .delete(employeeController.remove);

module.exports = router;
