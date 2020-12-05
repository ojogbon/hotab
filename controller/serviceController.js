const Service = require("./../model/service");

exports.postService = async (req, res) => {
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

    res.redirect("/admin/service");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.getAllService = async (req, res) => {
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

    res.redirect("/admin/service");
  }
};

exports.getServicePage = async (req, res) => {
  try {
    const service = await Service.find();
    res.render("services", {
      service: service
    });
  } catch (err) {
    // res.status(400).json({
    //   status: "fail",
    //   message: err
    // });
    res.redirect("/admin/service");
  }
};

exports.getAdminServicePage = (req, res) => {
  res.render("add_service");
};
