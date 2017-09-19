var mongoose = require("mongoose")
var attendeeModel = require("../models/AttendeeModel.js")
module.exports = app => {
  app.get("/api/speakers", async (req, res) => {
    attendeeModel.Attendee.find(function(err, attendees) {
      if (err) {
        return res.send(err)
      }
      res.json(attendees)
    })
  })
}
