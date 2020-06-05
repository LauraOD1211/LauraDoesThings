const BlogPost = require('../models/BlogPost');

module.exports = {
  getBlogposts: async (req, res, next) => {
    BlogPost.find().exec((err, posts) => {
      console.log(posts);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (posts.length == 0) {
        return res.status(200).json({"message":"no posts"});
      }
      else {
        return res.status(200).send(posts);
      }
    });
  }
};