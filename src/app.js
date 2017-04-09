'use strict'
const express = require('express');
const bodyParser  = require('body-parser');
const config = require('./config');
const get_users = require('./models');
const authFunction = require('./routes/middleware/authorisation.js');
const indexRoutes = require('./routes/index');
var app = express();
var apiRoutes = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens

app.get("/", function(req, res) {
  res.redirect('/login');
});
app.use('/user*', authFunction.checkSimpleUser);
app.use('/admin*', authFunction.checkAdminAccess);
app.use(indexRoutes);


app.listen(config.API_PORT);
