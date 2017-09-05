const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String
})

// Loads schema into mongoose
mongoose.model("users", userSchema)
