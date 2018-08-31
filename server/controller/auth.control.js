var passport = require('passport');

var config = require('../configs/config');

module.exports ={
    login: function(req, res, next) {
        passport.authenticate('azuread-openidconnect', 
          { 
            response: res,                      // required
            resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
            customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
            failureRedirect: '/' 
          }
        )(req, res, next);
    },
    authOpenIdReturn: function(req, res, next) {
        passport.authenticate('azuread-openidconnect', 
          { 
            response: res,                      // required
            failureRedirect: '/'  
          }
        )(req, res, next);
      }
}




