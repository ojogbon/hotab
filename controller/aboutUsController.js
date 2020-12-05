const AboutUs = require("./../model/aboutUs");

exports.AboutUsPage = (req, res) => {
  res.render("aboutus");
};

exports.createAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.create({
      staffId: req.body.staffId,
      shortText: req.body.shortText,
      longText: req.body.longText
    });
    res.status(400).json({
      status: "success",
      data: {
        aboutUs
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.getAboutUS = async (req, res) => {
  try {
    const aboutUs = await AboutUs.find();

    res.status(400).json({
      status: "success",
      data: {
        aboutUs
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
