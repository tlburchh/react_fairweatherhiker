const router = require("express").Router();
const deleteController = require("../../controllers/deleteController");

// Delete trail by ID
router.delete("/trails/:id", deleteController.trailId);
// Delete note by ID
router.delete('/notes/:id'), deleteController.noteId


module.exports = router;