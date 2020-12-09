const Service = require("./../model/contactUs");

exports.postContactUS = async (req, res) => {
  try {
    console.log(req.file);
    // const service = await Service.create({
    //   title: req.body.title,
    //   staffId: req.body.staffId,
    //   shortDes: req.body.shortDes,
    //   longDes: req.body.longDes,
    //   image: req.file
    // });

    // res.status(200).json({
    //   status: "success",
    //   data: {
    //     service
    //   }
    // });

    res.redirect("/admin/contactUs");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.getAllContactUS = async (req, res) => {
  try {
    const service = await Service.find();
    res.render(services, {
      service: service
    });
  } catch (err) {
    // res.status(400).json({
    //   status: "fail",
    //   message: err
    // });

    res.redirect("/admin/contactUS");
  }
};

exports.getContactUsPage = async (req, res) => {
  try {
    const service = await Service.find();
    res.render("contactUS", {
      service: service
    });
  } catch (err) {
    // res.status(400).json({
    //   status: "fail",
    //   message: err
    // });
    res.redirect("/admin/contactUS");
  }
};

exports.getAdminContactUsPage = (req, res) => {
  res.render("add_contactUS");
};
