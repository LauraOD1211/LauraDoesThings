const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var vocabRouter = require('./routes/vocab');
var grammarRouter = require('./routes/grammar');

mongoose.Promise = global.Promise;

const mongoURL = `mongodb://${process.env.dbUSER}:${process.env.dbPASS}@localhost:27017/${process.env.db}`;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Connection Error!', err);
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/blogposts', blogRouter);
app.use('/vocab', vocabRouter);
app.use('/grammarpost', grammarRouter);
app.use('*', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

module.exports = app;