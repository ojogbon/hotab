const express = require("express");

const adminController = require("./../controller/adminController");

const router = express.Router();

router.route("/admin").get(adminController.getAdminPage);

module.exports = router;
