
module.exports = app => {
  app.get("/api/futureEvents", async (req, res) => {
    
    const eventList = {
      Name:"Test future Event",
      Venue:"Blr"
    }

    res.send(eventList)
  })
}
