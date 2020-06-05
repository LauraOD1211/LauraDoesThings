const express = require('express');
const Blog = require('../controllers/blogController');

const router = express.Router();

router.get('/',  Blog.getBlogposts);

module.exports = router;