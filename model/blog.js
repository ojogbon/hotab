const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const blogSchema = new Schema(
  {
    staffId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true
    },
    title: {
      type: String,
      required: true,
      minlength: [3, "a title must be more than 3 characters"],
      maxlength: [133, "a title must not be more than 133 characters"],
      trim: true
    },
    content: {
      type: String,
      required: [true, "a blog must have a content"],
      trim: true
    },
    image: {
      type: String,
      required: [true, "a blog must have an image"]
    },
    status: {
      type: String,
      default: "succcess"
    },
    deleted: {
      type: Number,
      enum: [0, 1],
      default: 1
    }
  },
  {
    timestamps: true
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
