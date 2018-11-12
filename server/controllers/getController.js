const db = require('../models');
module.exports = {

  trails: (req, res) => {
    console.log('get all trails');
    db.Trails.find()
    .then(trails => {
      res.json(trails);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: 'Error getting all trails'})
    });
  },
  trailId: (req, res) => {
    console.log(`Getting trail by id: ${req.params.id}`);
    const id = req.params.id;
    db.Trails.findById(id).then(trail => {
      res.json(trail);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting trail..." });
    });   
  },
//notes
  notes: (req, res) => {
    console.log('get all notes');
    db.Notes.find()
    .then(notes => {
      res.json(notes);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: 'Error getting all notes'})
    });
  },
  noteId: (req, res) => {
    console.log(`Getting note by id: ${req.params.id}`);
    const id = req.params.id;
    db.Notes.findById(id).then(note => {
      res.json(note);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting note..." });
    });   
  },
};
