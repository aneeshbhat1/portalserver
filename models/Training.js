const mongoose = require("mongoose")
const { Schema } = mongoose

const trainingSchema = new Schema({
  title: String,
  author: String,
  // trainingDate: Date,
  // startTime: String,
  // endTime: String,
  // duration: String,
  // venue: String,
  // seats: {
  //   available: Number,
  //   booked: Number
  // },
  isCompleted: Boolean
})

// Loads schema into mongoose
mongoose.model("trainings", trainingSchema)
