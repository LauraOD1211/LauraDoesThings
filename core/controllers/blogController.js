const BlogPost = require('../models/BlogPost');

module.exports = {
  getBlogposts: async (req, res, next) => {
    console.log("GET blogposts");
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
  },
  getBlogpost: async (req, res, next) => {
    console.log("GET blogpost");
    let postID = req.params.id;
    BlogPost.findOne({ "_id":postID}).exec((err, post) => {
      console.log(post);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (!post) {
        return res.status(200).json({"message":"no post found"});
      }
      else {
        return res.status(200).send(post);
      }
    });
  }
};