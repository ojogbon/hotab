const bcrypt = require("bcryptjs");
const User = require("./../model/user");

exports.createNewUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.email, 12);
      const users = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
      });

      return res.status(200).json({
        status: "success",
        data: {
          users
        }
      });
    }

    res.status(400).json({
      status: "fail",
      message: "email alrealdy exist"
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
