const express = require('express');
const Grammar = require('../controllers/grammarController');

const router = express.Router();

router.get('/',  Grammar.getGrammars);
router.get('/:id',  Grammar.getGrammar);

module.exports = router;