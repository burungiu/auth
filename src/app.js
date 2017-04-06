'use strict'
const express = require('express');
const connection = require('./database').getConnection();
const Sequelize = require('sequelize');
const config = require('./config');
const get_users = require('./models');
var app = express();


app.get("/", function(req, res) {
});
app.listen(config.API_PORT);
