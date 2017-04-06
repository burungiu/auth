'use strict'
const express = require('express');
const connection = require('./database').getConnection();
const Sequelize = require('sequelize');
const bodyParser  = require('body-parser');
const config = require('./config');
const get_users = require('./models');

const indexRoutes = require('./routes/index');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

app.get("/", function(req, res) {
  res.send(200);
});
app.use(indexRoutes);
app.listen(config.API_PORT);

module.exports = app;
