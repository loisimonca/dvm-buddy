const router = require("express").Router();
const classifiedController = require("../../controllers/classifiedController");
//Matches with '/api/user
router.route("/").get(classifiedController.findAll);

module.exports = router;
