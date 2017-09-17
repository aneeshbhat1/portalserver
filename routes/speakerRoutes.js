module.exports = app => {
  app.get("/api/speakers", async (req, res) => {
    const speakerList = [
      {
        Name: "Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name: "Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name: "Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name:"Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name:"Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name:"Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name:"Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      },
      {
        Name:"Basha",
        TeamName: "Mumbai",
        Domain: "Dada",
        EmailId: "asdasd@ef.com",
        LinkedIn: "sdsad",
        Twitter: "sadsad"
      }
    ]

    res.send(speakerList)
  })
}
