const router = require("express").Router();
const postController = require("../../controllers/postController");


router.post('/newTrail', postController.insertTrail)
//Post notes about trails

router.post('/newNote', postController.insertNote)


module.exports = router;