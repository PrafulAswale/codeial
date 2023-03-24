const Post = require("../models/post");

module.exports.home = function (req, res) {
  // Post.find({}).then();

  //populate the
  Post.find({})
    .populate("user")
    .exec()
    .then(function (posts) {
      return res.render("home", {
        title: "Codeial | Home",
        posts: posts,
      });
    });
};
