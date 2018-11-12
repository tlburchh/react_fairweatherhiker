const router = require("express").Router();
const putController = require("../../controllers/putController");

// Update a trail by ID
router.put("/trails/:id", putController.trailId);

// etc...

module.exports = router;