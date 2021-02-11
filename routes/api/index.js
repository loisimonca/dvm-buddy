const router = require("express").Router();
const userRoutes = require("./users");
const classifiedRoutes = require("./classified");
const appointmentRoutes = require("./appointments");


//user routes
router.use("/users", userRoutes);
router.use("/classified", classifiedRoutes);
router.use("/appointments", appointmentRoutes);


module.exports = router;
