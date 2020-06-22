const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const req = require('require-yml');
const conf = req('../config.yml')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var vocabRouter = require('./routes/vocab');
var grammarRouter = require('./routes/grammar');
var adminRouter = require('./routes/admin');

mongoose.Promise = global.Promise;

const mongoURL = `mongodb://${conf.dbUSER}:${conf.dbPASS}@localhost:27017/${conf.db}`;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Connection Error!', err);
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

app.use('', express.static(path.join(__dirname, '/public')));
app.use('/admin', express.static(path.join(__dirname, '/admin')));
app.use('/blogposts', blogRouter);
app.use('/vocab', vocabRouter);
app.use('/grammarpost', grammarRouter);
app.use('/admin', adminRouter);
app.use('*', indexRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

module.exports = app;