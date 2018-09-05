module.exports = {
    ensureAuthenticated: function (req, res, next) {

        console.log("is auth" + req.isAuthenticated());
        if (req.isAuthenticated()) { return next(); }
        res.redirect("/api/auth/login");
        
    }
} 