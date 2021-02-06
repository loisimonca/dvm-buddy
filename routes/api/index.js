const router = require("express").Router();
const userRoutes = require("./users");
const employeeRoutes = require("./employee");
const classifiedRoutes = require("./classified");
const appointmentRoutes = require("./appointments");
const slotRoutes = require("./slots");

//user routes
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);
router.use("/classified", classifiedRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/slots", slotRoutes);
module.exports = router;
