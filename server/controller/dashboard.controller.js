const winston = require('../configs/winston');
const employeeSkill = require('../model/empSkill.model');
module.exports = {
    skillplaceholder: function (req, res, next) {
        winston.info('Inside the skillplaceholder controller' + req.query);
        if (req.query.employeeId != null) {
            employeeSkill.find({ empId: req.query.employeeId })
                .limit(1)
                .sort({ lastModifiedDate: -1 }).exec(function (err, docs) {
                    if (!err) {
                        winston.info(docs);
                        res.send(docs);
                    }
                });


        } else {
            res.send('Please provide the employeeId');
        }
    }
}