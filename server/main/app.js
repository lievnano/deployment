"use strict";

var express = require('express');
var app = express();

require('./config.js')(app, express);

module.exports = exports = app;