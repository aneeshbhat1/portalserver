var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Answer = require('../models/AnswerModel.js');

var querySchema=mongoose.Schema({
  Question:String,
  Y:String,
  Time:Date,
  By:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  Answers:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});

var queryModel=mongoose.model('Query',querySchema);
module.exports.Query = queryModel;
