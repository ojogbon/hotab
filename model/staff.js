const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const staffSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname is required"]
    },
    lastName: {
      type: String,
      required: [true, "lastname is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"]
    },
    phoneNumber: {
      type: String,
      required: [true, "phoneNumber is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      enum: ["male", "female"]
    },
    type: {
      type: String
      // required: [true, "firstname is required"]
    },
    role: {
      type: String,
      //   required: [true, "role is required"],
      default: "admin",
      enum: ["admin", "guide", "lead-guide"]
    },
    status: {
      type: String,
      default: "success"
    },
    deleted: {
      type: Number,
      enum: [0, 1],
      default: 1
    }
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
