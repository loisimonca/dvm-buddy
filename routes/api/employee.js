const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");
//Matches with '/api/user
router.route("/").get(employeeController.findAll);

module.exports = router;
