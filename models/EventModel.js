var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Address = require('../models/AddressModel.js');
var Feedback = require('../models/FeedbackModel.js');
var Query = require('../models/QueryModel.js');

var eventSchema=mongoose.Schema({
  Name:String,
  EventDate:Date,
  Duration:Number,
  Type:String,
  Topic:String,
  Title:String,
  Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  DetailedDescription:String,
  MaxAttendees:Number,
  Venue:{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  Attendees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }],
  Feedback:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
  Queries:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Query' }]
});

var eventModel=mongoose.model('Event',eventSchema);
module.exports.Event = eventModel;
