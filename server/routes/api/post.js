const router = require("express").Router();
const postController = require("../../controllers/postController");


router.post('/trails', postController.trails)
//Post notes about trails

router.post('/notes', postController.notes)


module.exports = router;