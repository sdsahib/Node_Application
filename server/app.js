var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require('express-session');
var indexRouter = require('./routes/index.route');
var usersRouter = require('./routes/users');
// to remove when content moved to index
var passport = require('passport');
var config = require('./configs/config');
var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'Microsoft OIDC Example Web Application'
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));
require('./configs/passport')(app);

app.use('/', indexRouter);

global.users = [];
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
  };
  
  app.get('/', function(req, res) {
    res.render('index', { user: req.user });
  });
  
  // '/account' is only available to logged in user
  app.get('/account', ensureAuthenticated, function(req, res) {
    res.render('account', { user: req.user });
  });
  

app.use('/users', usersRouter);

module.exports = app;
