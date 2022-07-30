var express = require('express');
var app = express();

var usersRouter = require('./users');
app.use(usersRouter);

module.exports = app
