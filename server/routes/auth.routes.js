var express = require('express');
var config = require('../configs/config');
var authControl = require('../controller/auth.control');
var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'Microsoft OIDC Example Web Application'
});

const router = express.Router();


router.get('/login', authControl.login,
  function (req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  }
);

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.get('/openid/return', authControl.authOpenIdReturn,
  function (req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  });

// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.post('/openid/return',
  authControl.authOpenIdReturn,
  function (req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  });

// 'logout' route, logout from passport, and destroy the session with AAD.
router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});

module.exports = router;