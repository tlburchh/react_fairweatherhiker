const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Hiker", { useNewUrlParser: true });

  const trailSeed = [
    {
      id: 7010450,
      name: "Laurel Bluffs Trail",
      summary: "The eastern section of the Laurel Bluffs Trail, leadring from the Pump Station to Guess Road.",
      difficulty: "blue",
      stars: 5,
      location: "Durham, North Carolina",
      url: "https://www.hikingproject.com/trail/7015864/laurel-bluffs-trail-east",
      imgMedium: "https://cdn-files.apstatic.com/hike/7013580_medium_1457907618.jpg",
      length: 2.4,
      longitude: -78.9351,
      latitude: 36.0716,


    }
  ];

  const noteSeed = [
    {
      name: 'note name',
      note: 'I am a note'
    }
  ];

//seed initial data
db.Trails.deleteMany({}).then(
  db.Trails.insertMany(trailsSeed).then(resp => {
    console.log("Added trails: " + resp);
    ).catch(err => {
      console.log("Error inserting trails");

db.Notes.deleteMany({}).then(
  db.Notes.insertMany(notesSeed).then(resp => {
    console.log("Added notes: " + resp);
    ).catch(err => {
      console.log("Error inserting notes");