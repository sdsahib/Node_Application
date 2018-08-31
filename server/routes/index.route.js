var express = require('express');
var router = express.Router();
var authRoutes = require('./auth.routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',authRoutes);


module.exports = router;
