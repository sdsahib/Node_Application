const passport = require('passport');
const uuid = require('uuid');
require('./strategy/OIDCStrategy')();

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  // build up the session
  app.use(passport.session());


  
  // Stores user in session
  passport.serializeUser((user, done) => {
    const id = uuid.v4();
    users[id] = user;
    done(null, id);
  });
  // retrives user from session
  passport.deserializeUser((id, done) => {
    const user = users[id];
    done(null, user);
  });

  

}