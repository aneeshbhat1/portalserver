module.exports = app => {
  app.get("/api/futureEvents", async (req, res) => {
    let date = new Date()
    const eventList = [
      {
        Name: "Web development",
        EventDate: date,
        Duration: 30,
        Type: "Technical", // Technical, Infrastructure, SoftSkills
        Tags: ["web", "react", "redux"], // Web, Mobile, App etc
        Level: 1, // Begineer, Intermediate, Advanced
        //Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
        DetailedDescription:
          "Bacon ipsum dolor amet filet mignon spare ribs corned beef, leberkas pork chop porchetta andouille jowl bresaola ribeye prosciutto cow ball tip short ribs bacon. Alcatra brisket porchetta boudin beef ribs sirloin tri-tip strip steak turkey short ribs venison bresaola ground round. Andouille picanha pancetta boudin short ribs, ground round tenderloin spare ribs. Pig cow meatball chuck jowl, salami fatback flank tail. Ham brisket fatback spare ribs pork belly, sausage doner.",
        MaxAttendees: 20,
        Venue: "Zurich room"
      },
      {
        Name: "Mobile development",
        EventDate: new Date("2017/09/09"),
        Duration: 30,
        Type: "Technical", // Technical, Infrastructure, SoftSkills
        Tags: ["iOS", "native", "swift"], // Web, Mobile, App etc
        Level: 1, // Begineer, Intermediate, Advanced
        //Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
        DetailedDescription:
          "Bacon ipsum dolor amet filet mignon spare ribs corned beef, leberkas pork chop porchetta andouille jowl bresaola ribeye prosciutto cow ball tip short ribs bacon. Alcatra brisket porchetta boudin beef ribs sirloin tri-tip strip steak turkey short ribs venison bresaola ground round. Andouille picanha pancetta boudin short ribs, ground round tenderloin spare ribs. Pig cow meatball chuck jowl, salami fatback flank tail. Ham brisket fatback spare ribs pork belly, sausage doner.",
        MaxAttendees: 20,
        Venue: "Tokyo room"
      },
      {
        Name: "Native development",
        EventDate: new Date("2017/09/09"),
        Duration: 30,
        Type: "Technical", // Technical, Infrastructure, SoftSkills
        Tags: ["iOS", "native", "swift"], // Web, Mobile, App etc
        Level: 1, // Begineer, Intermediate, Advanced
        //Host:{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
        DetailedDescription:
          "Bacon ipsum dolor amet filet mignon spare ribs corned beef, leberkas pork chop porchetta andouille jowl bresaola ribeye prosciutto cow ball tip short ribs bacon. Alcatra brisket porchetta boudin beef ribs sirloin tri-tip strip steak turkey short ribs venison bresaola ground round. Andouille picanha pancetta boudin short ribs, ground round tenderloin spare ribs. Pig cow meatball chuck jowl, salami fatback flank tail. Ham brisket fatback spare ribs pork belly, sausage doner.",
        MaxAttendees: 20,
        Venue: "Tokyo room"
      }
    ]

    res.send(eventList)
  })
}
