const express = require('express');
const router = express.Router();
const { adminSignin } = require('../controller/userauthcontroller');


// Routes
router.post('/admin', adminSignin)

module.exports = router;