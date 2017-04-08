const HTTPStatus = require('http-status');
const express = require('express');
const router = express.Router();
const userFunction = require('./handlers/authentication/login.js');
const adminRoutes = require('./handlers/admin_user_operations/get_user.js');

router.post('/login', userFunction.loginFunction);
router.get('/admin/users/', adminRoutes.getAllUsers);
router.get('/admin', (req, res) => {
  res.send("Admin access aproved");
});

router.get('/signup', (req, res) =>
  res.render('signup.ejs'));

router.get('/login', (req, res) =>
  res.render('login.ejs'));

router.get('/user', (req, res) => {
  res.send("User access aproved");
});

module.exports = router;
