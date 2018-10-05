const express = require('express');

const commonControl = require('../controller/common.controller'); 
const dashboard = require('../controller/dashboard.controller');
const router = express.Router();

// Router needs employeeId as the parameter, else will return the error
router.get('/skillplaceholder',commonControl.ensureAuthenticated,dashboard.skillplaceholder);

module.exports = router;