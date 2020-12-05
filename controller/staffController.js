// const jwt = require("jsonwebtoken");
const Staff = require("./../model/staff");

exports.createNewStaff = async (req, res) => {
  try {
    const staff = await Staff.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      gender: req.body.gender,
      role: req.body.role
    });

    res.status(200).json({
      status: "success",
      data: {
        staff
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        staff
      }
    });
  } catch (err) {
    res.status(200).json({
      status: "success",
      message: err
    });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json({
      status: "success",
      data: {
        staff
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      message: err
    });
  }
};
