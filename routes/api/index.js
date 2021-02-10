const router = require("express").Router();
const userRoutes = require("./users");
const classifiedRoutes = require("./classified");
// const appointmentRoutes = require("./appointments");
const slotRoutes = require("./slots");

//user routes
router.use("/users", userRoutes);
router.use("/classified", classifiedRoutes);
router.use("/appointments", slotRoutes);
// router.use("/slots", slotRoutes);
module.exports = router;
