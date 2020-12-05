const express = require("express");

const commentController = require("./../controller/commentController");

const router = express.Router();
router.route("/comment").post(commentController.createComment);
router.route("/comment/:id").get(commentController.getBlogComment);

module.exports = router;
