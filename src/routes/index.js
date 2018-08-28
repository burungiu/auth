const HTTPStatus = require('http-status');
const express = require('express');
const router = express.Router();
const loginHandlers = require('./handlers/login.js');
const adminActions = require('../admin/');


router.post('/login', loginHandlers.loginHandler);
router.get('/admin/users/', adminActions.Users.getUsers.getAllUsers);
router.get('/admin/users/:accountId', adminActions.Users.getUsers.getUserByID);
router.post('/admin/users/:accountID/setBan', adminActions.Users.modifyUsers.setBan);
router.post('/admin/users/:accountID/unsetBan', adminActions.Users.modifyUsers.unsetBan);
router.post('/admin/users/:accountID/remove', adminActions.Users.modifyUsers.removeUser);
router.post('/admin/users/addUser/', adminActions.Users.modifyUsers.addUser);
router.get('/admin/', (req, res) => {
  res.send("Admin access aproved");
});
router.get("/authorise", (req, res) => {
	res.send(200);
})
router.get('/user/', (req, res) => {
  res.send("User access aproved");
});
router.get('/admin/panel', (req, res) => {
  res.render('admin.ejs');
});
router.get('/user/checkConnection', (req, res) => {
  res.send("SUCCES");
});

router.get('/login', (req, res) => res.render('login.ejs')); //Trebuie modificat
router.get('/signup', (req, res) => res.render('signup.ejs'));

module.exports = router;
