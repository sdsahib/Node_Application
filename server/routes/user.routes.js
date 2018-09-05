const express = require('express');
const userController = require('../controller/user.control');
const commonControl = require('../controller/common.control'); 

const router = express.Router();

router.get('/getImage',commonControl.ensureAuthenticated,userController.getImage);

module.exports = router;