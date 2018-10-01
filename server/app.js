var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const expressSession = require('express-session');
// for logging
const winston = require('./configs/winston');

var indexRouter = require('./routes/index.route');
const commonControl = require('./controller/common.controller');

// to remove when content moved to index
var passport = require('passport');
var config = require('./configs/config');


var app = express();
// logging
app.use(morgan('combined', { stream: winston.stream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", null);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, 'dist')));

require('./configs/passport')(app);

app.use('/api', indexRouter);


global.users = [];



  // app.get('/', function(req, res) {
  //   res.render('index', { user: req.user });
  // });
  
  // '/account' is only available to logged in user

  app.get('/null',function(req,res){
    res.send('hello');
  });
  app.get('/account', commonControl.ensureAuthenticated, function(req, res) {
   res.send( { user: req.user.accessToken });
  });
  



module.exports = app;
