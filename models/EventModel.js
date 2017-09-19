var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Address = require('../models/AddressModel.js');
var Feedback = require('../models/FeedbackModel.js');
var Query = require('../models/QueryModel.js');

var eventSchema=mongoose.Schema({
  Name:String,
  EventDate:String,
  Duration:Number,
  DurationType: String,
  Type:String, // Technical, Infrastructure, SoftSkills
  Tags:[String], // Web, Mobile, App etc
  Level: String, // Begineer, Intermediate, Advanced
  Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  DetailedDescription:String,
  MaxAttendees:Number,
  Venue:String,
  Attendees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }],
  //Feedback:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
  //EvaluationQuestions:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Query' }],
  CourseContent: String,
  RecordedVideo: String
});

var eventModel=mongoose.model('Event',eventSchema,'Events');
module.exports.Event = eventModel;
