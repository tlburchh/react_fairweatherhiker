const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {
  insertTrail: (req, res) => {
    const newTrail = {
        name: req.body.name,
        summary: req.body.summary,
        difficulty: req.body.difficulty,
        stars: req.body.stars,
        location: req.body.location,
        url: req.body.url,
        imgMedium: req.body.imgMedium,
        length: req.body.length,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    };

  

    db.Trails.insertMany(newTrail).then(trailsResp => {
        console.log(`Inserted new trail: ${trailsResp}`);
  
    }).catch(err => {
        console.log(`Error adding new trail: ${err}`);
        res.json({message: `Error adding new trail`});
    });
},

insertNote: (req, res) => {
  const newNote = {
      name: req.body.name,
      note: req.body.summary,

  };



  db.Notes.insertMany(newNote).then(notesResp => {
      console.log(`Inserted new trail: ${notesResp}`);

  }).catch(err => {
      console.log(`Error adding new note: ${err}`);
      res.json({message: `Error adding new note`});
  });
},

//add post for notes
};

