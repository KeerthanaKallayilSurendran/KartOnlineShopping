const express = require('express');
const router = express.Router();
const adminSignin = require('../controller/adminauthcontroller');


// Routes
router.post('/admin', adminSignin)
console.log(8)

module.exports = router;