const router = require("express").Router();
const userRoutes = require("./users");
const employeeRoutes = require("./employee");
const classifiedRoutes = require("./classified");

//user routes
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);
router.use("/classified", classifiedRoutes);

module.exports = router;
