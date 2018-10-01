var express = require('express');
var router = express.Router();
var authRoutes = require('./auth.routes');
var userRoutes = require('./user.routes');
var dashboardRoutes = require('./dashboard.route');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',authRoutes);
router.use('/user',userRoutes);
router.use('/dashboard',dashboardRoutes);


module.exports = router;
