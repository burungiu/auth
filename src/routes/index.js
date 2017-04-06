const HTTPStatus = require('http-status');
const express = require('express');
const router = express.Router();
const userFunction = require('./handlers/authentication/login.js');

router.post('/login', userFunction.loginFunction);

module.exports = router;
