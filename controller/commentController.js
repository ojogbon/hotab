const Comment = require("./../model/comment");

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      blogId: req.body.blogId,
      userId: req.body.userId,
      message: req.body.message
    });

    res.status(200).json({
      status: "success",
      data: {
        comment
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err
    });
  }
};

exports.getBlogComment = async (req, res) => {
  try {
    const blogComment = await Comment.find({
      blogId: req.params.id
    });

    res.status(200).json({
      status: "success",
      data: {
        blogComment
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err
    });
  }
};
