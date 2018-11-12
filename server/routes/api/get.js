const router = require('express').Router();
const getController = require("../../controllers/getController");

//Get all saved trails
router.get('/trails', getController.trails);
//Get single saved trails
router.get('/trails/:id', getController.trailId);
//Get all saved notes
router.get('/notes', getController.notes);
//Get single saved note
router.get('/notes/:id', getController.noteId)
module.exports = router;