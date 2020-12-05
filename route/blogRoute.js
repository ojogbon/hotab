const express = require("express");

const blogController = require("./../controller/blogController");

const router = express.Router();

router
  .route("/admin/blog")
  .get(blogController.getAllBlog)
  .post(blogController.createBlog);

router.route("/admin/blog/:id").get(blogController.getOneBlog);

router.route("/blogs").get(blogController.getBlogPage);
module.exports = router;
