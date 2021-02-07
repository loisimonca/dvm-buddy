const router = require("express").Router();
const userRoutes = require("./users");
const classifiedRoutes = require("./classified");

//user routes
router.use("/users", userRoutes);
router.use("/classified", classifiedRoutes);

module.exports = router;
