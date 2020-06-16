const Grammar = require('../models/Grammar');

module.exports = {
  getGrammars: async (req, res, next) => {
    console.log("GET grammarposts");
    Grammar.find().exec((err, posts) => {
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
  getGrammar: async (req, res, next) => {
    console.log("GET grammarpost");
    let gID = req.params.id;
    Grammar.findOne({ "_id":gID}).exec((err, post) => {
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