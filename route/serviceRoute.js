const express = require("express");
const serviceController = require("./../controller/serviceController");

const router = express.Router();

router
  .route("/admin/services")
  .post(serviceController.postService)
  .get(serviceController.getAdminServicePage);

router.route("/services").get(serviceController.getServicePage);

module.exports = router;
