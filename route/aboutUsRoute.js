const express = require("express");

const aboutUsController = require("./../controller/aboutUsController");

const router = express.Router();

router
  .route("/admin/aboutUs")
  .get(aboutUsController.getAboutUS)
  .post(aboutUsController.createAboutUs);

router.route("/aboutus").get(aboutUsController.AboutUsPage);

module.exports = router;
