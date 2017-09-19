const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  Name:String,
  TeamName: String,
  Domain: String,
  EmailId: String,
  LinkedIn: String,
  Twitter: String,
  AttendeeType: [String]
})

// Loads schema into mongoose
var users = mongoose.model("users", userSchema)
module.exports.User = users;
