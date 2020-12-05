const Blog = require("./../model/blog");

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      staffId: req.body.staffId,
      title: req.body.title,
      content: req.body.content,
      image: req.body.image
    });

    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err
    });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err
    });
  }
};

exports.getOneBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err
    });
  }
};

exports.getBlogPage = (req, res) => {
  res.render("blog", {
    // blog: blog
  });
};
