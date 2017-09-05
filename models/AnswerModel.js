var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');

var answerSchema=mongoose.Schema({
  Answer:String,
  Time:Date,
  By:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  WasitHelpful:Boolean
});

var answerModel=mongoose.model('Answer',answerSchema);
module.exports.Answer = answerModel;
