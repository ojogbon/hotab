const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname is requires"]
    },
    lastName: {
      type: String,
      required: [true, "lastname is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true
    },
    role: {
      type: String,
      default: "user"
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
      minlength: [5, "a password must be more than 5 characters"]
    },
    like: {
      item: [
        {
          blogId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Staff"
          }
        }
      ],

      counter: {
        type: Number,
        default: 1
      }
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
