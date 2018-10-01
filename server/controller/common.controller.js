const winston = require('../configs/winston');
module.exports = {
    ensureAuthenticated: function (req, res, next) {

        winston.info(`${req.isAuthenticated()}`);
        if (req.isAuthenticated()) { return next(); }
        res.redirect("/api/auth/login");

    }
} 