var mongoose = require("mongoose")
var userModel = require("../models/User.js")
module.exports = app => {
  app.get("/api/speakers", async (req, res) => {
    userModel.User.find({ AttendeeType: "Speaker" }).exec(function(err, attendees) {
      if (err) {
        return res.send(err)
      }
      res.json(attendees)
    })
  })
}
