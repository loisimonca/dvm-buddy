const router = require("express").Router();
const userRoutes = require("./users");
const employeeRoutes = require("./employee");

//user routes
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);

module.exports = router;
