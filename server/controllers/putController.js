const db = require("../models");

// Define methods for UPDATING various data from the Users, Wines, etc collections
module.exports = {

    noteId: (req, res) => {
        const newData = req.body;
        const id = req.params.id;
        db.Trails.findOneAndUpdate(
            { _id: id },
            newData
        ).then(resp => {
            console.log(`Updated rating: ${resp}`);
            res.json(resp);
        }).catch(err => {
            console.log(err);
            res.json({ message: `Error updating rating: ${err}` })
        });
    }

};