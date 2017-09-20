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
  }),
    app.post("/api/registerForEvent", async (req, res) => {
      console.log(req.user._id);
      console.log(req.body.eventId)

      // axisData.save(function (err, result) {
      //   axisData.find({}, function (err, results) {
      //       res.json(results);
      //   });

      eventModel.Event
        .findOne({ _id: req.body.eventId })
        .populate("Attendees")
        .exec((err, event) => {
          if (err) {
            res.send(err)
          }
          console.log(event)
          event.Attendees.push({ $oid: req.user._id })
          event.save((err, result) => {
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
        })
    })
}
