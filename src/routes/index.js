const HTTPStatus = require('http-status');
const express = require('express');
const router = express.Router();
const userFunction = require('./handlers/authentication/login.js');

router.post('/login', userFunction.loginFunction);
router.get('/admin', (req, res) => {
  res.send("Admin access aproved");
});
router.get('/user', (req, res) => {
  res.send("User access aproved");
});

module.exports = router;
