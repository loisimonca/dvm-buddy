const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../../config/passport");
//Matches with '/api/user
router
  .route("/login")
  .post(passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

router.route("/").get(userController.findAll).post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
