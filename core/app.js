const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');


mongoose.Promise = global.Promise;

const mongoURL = `mongodb://${process.env.dbUSER}:${process.env.dbPASS}@localhost:27017/${process.env.db}`;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Connection Error!', err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/blogposts', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

module.exports = app;