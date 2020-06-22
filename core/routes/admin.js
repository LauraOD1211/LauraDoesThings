const express = require('express');
const path = require("path");
const Admin = require('../controllers/adminController');

const router = express.Router();

router.post('/login',  Admin.login);
router.post('/ref',  Admin.refresh);
router.post('/check', Admin.check)
router.post('/blog', Admin.postBlogpost);
router.put('/blog/edit/:id', Admin.putBlogpost);
router.delete('/blog/delete/:id', Admin.deleteBlogpost);



module.exports = router;