const mongoose = require('mongoose');
const Vocab = require('./Vocab')
const Schema = mongoose.Schema;

const vocablistSchema = new Schema({
    topic: {type:String},
    vocab:{
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'Vocab'
    }
});

module.exports = mongoose.model('Vocablist', vocablistSchema);