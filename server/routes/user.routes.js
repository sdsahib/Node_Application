const express = require('express');
const userController = require('../controller/user.controller');
const commonControl = require('../controller/common.controller'); 

const router = express.Router();

router.get('/getImage',commonControl.ensureAuthenticated,userController.getImage);

module.exports = router;