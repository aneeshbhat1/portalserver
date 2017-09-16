const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
require("./models/User")
require("./models/Training")
require("./services/passport")

mongoose.connect(keys.mongoURI)

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)
require("./routes/trainingRoutes")(app)
require("./routes/quoteRoutes")(app)
require("./routes/eventRoutes")(app)
require("./routes/speakerRoutes")(app)


if (process.env.NODE_ENV === "production") {
  // Express to serve static files
  app.use(express.static("client/build"))
  // Express to serve index.html, when it is not able to recognize the route
  const path = require("path")
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 7000
app.listen(PORT)
