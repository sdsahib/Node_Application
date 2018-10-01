const express = require('express');

const commonControl = require('../controller/common.controller'); 

const router = express.Router();

router.get('/skillplaceholder',commonControl.ensureAuthenticated);

module.exports = router;