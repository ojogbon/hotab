const express = require("express");
const contactUSController = require("./../controller/contactUsController");

const router = express.Router();

router
  .route("/admin/contactUS")
  .post(contactUSController.postContactUS)
  .get(contactUSController.getAdminContactUsPage);

router.route("/contactUs").get(contactUSController.getContactUsPage);

module.exports = router;
