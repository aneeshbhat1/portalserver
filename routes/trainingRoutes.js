

module.exports = app => {
  app.get("/api/trainings", async (req, res) => {

    let trainingType = req.query.trainingType;

    const trainingList = {
      Name:"Test Training",
      Venue:"Blr"
    }

    // const training = await Training.find();
    res.send(trainingList);
  })
}