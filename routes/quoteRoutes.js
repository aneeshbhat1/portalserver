
module.exports = app => {
  app.get("/api/quote", async (req, res) => {

    const quote = {
      text:"Realists don't fear the results of their study",
      quoteBy:"Mozzie"
    }

    res.send(quote);
  })
}