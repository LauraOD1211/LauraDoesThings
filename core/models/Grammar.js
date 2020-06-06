const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grammarSchema = new Schema({
    topic: {type: String},
    body: {type: String}
});

module.exports = mongoose.model('Grammar', grammarSchema);