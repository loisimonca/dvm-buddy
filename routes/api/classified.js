const router = require("express").Router();
const classifiedController = require("../../controllers/classifiedController");
//Matches with '/api/user
router
  .route("/")
  .get(classifiedController.findAll)
  .post(classifiedController.create);

router.route("/zipcode/:zip/:distance").get(classifiedController.findZipcode);

router
  .route("/:id")
  .get(classifiedController.findById)
  .put(classifiedController.update)
  .delete(classifiedController.remove);

module.exports = router;
