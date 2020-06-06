const express = require('express');
const Vocab = require('../controllers/vocabController');

const router = express.Router();

router.get('/',  Vocab.getVocablists);
router.get('/:id', Vocab.getVocablist);
router.get('/list/:id', Vocab.getVocabs);
router.get('/vocab/:id', Vocab.getVocab);

module.exports = router;