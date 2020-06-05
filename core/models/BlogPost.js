const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: {type:String},
    posted: {type: Date, default: Date.now},
    topic: {type: String},
    body: {type: String}
});

module.exports = mongoose.model('BlogPost', blogPostSchema);