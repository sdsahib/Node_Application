var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var empSkill =  new Schema({
    id: {
        type: ObjectId
    },
    empId: {
        type: String
    },
    subSkillId: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
});

var employeeSkill = mongoose.model('employeeskill',empSkill,'employeeskill');
module.exports = employeeSkill;