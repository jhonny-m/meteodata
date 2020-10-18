var createError = require('http-errors');
var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

require('dotenv').config();
var cors = require('cors');


var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');

var app = express();
app.use(cors());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/', indexRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send('error');
});

module.exports = app;
