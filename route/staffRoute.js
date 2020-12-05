const express = require("express");

const staffController = require("./../controller/staffController")
const router = express.Router();

router.route("/staff").post(staffController.createNewStaff).get(staffController.getAllStaff)
router.route("/staff/:id").get(staffController.getStaff);
module.exports = router;
