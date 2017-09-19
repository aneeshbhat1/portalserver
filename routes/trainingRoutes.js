var mongoose = require("mongoose")
var eventModel = require("../models/EventModel.js")

module.exports = app => {
  app.get("/api/trainings", async (req, res) => {
    eventModel.Event
      .find({
        $or: [
          { Type: "Technical" },
          { Type: "Softskills" },
          { Type: "Infrastructure" }
        ]
      })
      .populate("Attendees")
      .populate("Host")
      .exec((err, events) => {
        if (err) {
          res.send(err)
        }
        res.json(events)
      })
  })
}
