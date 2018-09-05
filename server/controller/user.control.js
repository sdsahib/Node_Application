const request = require('superagent');



module.exports = {
    getImage: function(req,res,next){
        module.exports.getProfilePhoto(req.user.accessToken,(errPhoto, profilePhoto) =>{
            console.log("recieved photo");
            res.send(profilePhoto);
        });
    },
    getProfilePhoto : function(accessToken, callback) {
        // Get the profile photo of the current user (from the user's mailbox on Exchange Online).
        // This operation in version 1.0 supports only work or school mailboxes, not personal mailboxes.
        request
            .get('https://graph.microsoft.com/v1.0/me/photos/48x48/$value')
            .set('Authorization', 'Bearer ' + accessToken)
            .end((err, res) => {
                // Returns 200 OK and the photo in the body. If no photo exists, returns 404 Not Found.
                callback(err, res.body);
            });
    }
};



    


