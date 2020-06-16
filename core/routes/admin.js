const express = require('express');
const path = require("path");
const Admin = require('../controllers/adminController');

const router = express.Router();

router.post('/login',  Admin.login);
router.post('/ref',  Admin.refresh);

module.exports = router;