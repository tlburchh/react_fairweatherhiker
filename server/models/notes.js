const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema ({
    id: {
        type: String,
        trim: true,
    },

    name: {
        type:  String,
        trim: true,

    },

    note: {
        type: String,
        trim: true,
 
    },
});