const Vocablist = require('../models/Vocablist');
const Vocab = require('../models/Vocab');

module.exports = {
  getVocablists: async (req, res, next) => {
    console.log("GET vocabposts");
    Vocablist.find().exec((err, lists) => {
      console.log(lists);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (lists.length == 0) {
        return res.status(200).json({"message":"no lists"});
      }
      else {
        return res.status(200).send(lists);
      }
    });
  },
  getVocablist: async (req, res, next) => {
    console.log("GET vocabpost");
    let listID = req.params.id;
    Vocablist.findOne({ "_id":listID}).exec((err, list) => {
      console.log(list);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (!list) {
        return res.status(200).json({"message":"no list found"});
      }
      else {
        return res.status(200).send(list);
      }
    });
  },
  getVocabs: async (req, res, next) => {
    console.log("GET vocab from list");
    let listID = req.params.id;
    Vocablist.findOne({ "_id":listID}).exec((err, list) => {
      console.log(list);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (!list || !list.vocab) {
        return res.status(200).json({"message":"no list found"});
      }
      else {
        let promise = async () => {
          let vocabArr = [];
          for(const vocab of list.vocab) {
            console.log(vocab+"for loop");
            vocabArr.push(await findVocab(vocab)); 
            console.log(vocabArr+"done loop");
          }
          return vocabArr;
        }
        promise().then((result) => {
          console.log("returned");
          return res.status(200).send(result);
        })
         
      }
      ;
    });
  },
  getVocab: async (req, res, next) => {
    console.log("GET vocab");
    let vocabID = req.params.id;
    Vocab.findOne({ "_id":vocabID}).exec((err, vocab) => {
      console.log(vocab);
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      if (!vocab) {
        return res.status(200).json({"message":"no vocab found"});
      }
      else {
        return res.status(200).send(vocab);
      }
    });
  }
};

let findVocab = vocab => {
  return new Promise((resolve, reject) => {
    Vocab.findOne({"_id":vocab}).exec((err, vocab) => {
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      else {
        resolve(vocab);
      }
    });
  });
}