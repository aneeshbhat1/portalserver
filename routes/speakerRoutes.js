
module.exports = app => {
  app.get("/api/speakers", async (req, res) => {

    const speakerList = {
      Name:"XYZ",
      Domain:"Web"
    }

    res.send(speakerList);
  })
}