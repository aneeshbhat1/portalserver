var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Address = require('../models/AddressModel.js');
var Feedback = require('../models/FeedbackModel.js');
var Query = require('../models/QueryModel.js');

var eventSchema=mongoose.Schema({
  Name:String,
  EventDate:Date,
  Duration:Number,
  Type:String, // Technical, Infrastructure, SoftSkills
  Tags:[String], // Web, Mobile, App etc
  Level: Number, // Begineer, Intermediate, Advanced
  Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  DetailedDescription:String,
  MaxAttendees:Number,
  Venue:{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  Attendees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }],
  Feedback:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
  //EvaluationQuestions:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Query' }],
  CourseContent: String,
  RecordedVideo: String
});

var eventModel=mongoose.model('Event',eventSchema);
module.exports.Event = eventModel;
