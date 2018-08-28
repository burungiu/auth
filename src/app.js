'use strict'
const express = require('express');
const bodyParser  = require('body-parser');
const config = require('./config');
const get_users = require('./models');
const authFunction = require('./routes/middleware/authorisation.js');
const indexRoutes = require('./routes/index');

var cookieParser = require('cookie-parser');
var cors = require('cors')
var app = express();
var apiRoutes = express.Router();
app.use(cors())
app.use(cookieParser());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:61931');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token,content-type');

    res.setHeader('Access-Control-Expose-Headers', 'x-access-token');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    

    // Pass to next layer of middleware
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens

app.get("/", function(req, res) {
  res.redirect('/login');
});
app.use(express.static('views'));  //Trebuie modificat
app.use('/user*', authFunction.checkSimpleUser);
app.use('/admin*', authFunction.checkAdminAccess);
app.use('/authorise', authFunction.checkSimpleUser);
app.use(indexRoutes);



app.listen(config.API_PORT);

