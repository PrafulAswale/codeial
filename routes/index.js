const express = require('express');

const router = express.Router();
const home = require('../controllers/home');

console.log("Routes loaded");
router.get('/', home.home);
router.use('/users', require('./users'))

module.exports = router;