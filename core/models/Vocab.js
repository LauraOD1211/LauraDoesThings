const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vocabSchema = new Schema({
    swedish: {type:String},
    translation: {type:String}
});

module.exports = mongoose.model('Vocab', vocabSchema);