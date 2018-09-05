var express = require('express');
var router = express.Router();
var authRoutes = require('./auth.routes');
var userRoutes = require('./user.routes');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',authRoutes);
router.use('/user',userRoutes);


module.exports = router;
