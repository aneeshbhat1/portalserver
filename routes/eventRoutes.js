var mongoose = require("mongoose")
var eventModel = require("../models/EventModel.js")

module.exports = app => {
  app.get("/api/futureEvents", async (req, res) => {
    eventModel.Event
      .find({})
      .populate("Attendees")
      .populate("Host")
      .exec((err, events) => {
        if (err) {
          res.send(err)
        }
        res.json(events)
      })
  }),
    app.post("/api/registerForEvent", async (req, res) => {
      eventModel.Event
        .find({})
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
