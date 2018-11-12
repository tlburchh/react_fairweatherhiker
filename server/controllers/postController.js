const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {
  insert: (req, res) => {
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
};