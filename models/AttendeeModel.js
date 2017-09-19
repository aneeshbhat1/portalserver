var mongoose=require('mongoose');
var Address = require('../models/AddressModel.js');

var attendeeSchema=mongoose.Schema({
  Name:String,
  TeamName: String,
  Domain: String,
  EmailId: String,
  LinkedIn: String,
  Twitter: String
  // Profession:String,
  // Company:String,
  // Designation:String,
  // TopicsofInterest:[String],
  // SkillSet:[String],
  // MobileNo:String,
  // PersonalMailId:String,
  // Address:{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  // PointsAccumulated:Number
});

var attendeeModel=mongoose.model('Attendee',attendeeSchema,'Attendees');
module.exports.Attendee = attendeeModel;
