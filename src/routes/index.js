const HTTPStatus = require('http-status');
const express = require('express');
const router = express.Router();
const userFunction = require('./handlers/authentication/login.js');
const adminRoutes = require('./handlers/admin_user_operations/get_user.js');
const usersModify = require('./handlers/admin_user_operations/modify_user.js');
router.post('/login', userFunction.loginFunction);
router.get('/admin/users/', adminRoutes.getAllUsers);
router.get('/admin/users/:accountId', adminRoutes.getUserByID);
router.post('/admin/users/:accountID/setBan', usersModify.setBan);
router.post('/admin/users/:accountID/unsetBan', usersModify.unsetBan);
router.post('/admin/users/:accountID/remove', usersModify.removeUser);
router.post('/admin/users/addUser/', usersModify.addUser);
router.get('/admin/', (req, res) => {
  res.send("Admin access aproved");
});
router.get('/user/', (req, res) => {
  res.send("User access aproved");
});
router.get('/admin/panel', (req, res) => {
  res.render('admin.ejs');
});
router.get('/user/checkConnection', (req, res) => {
  res.send("SUCCES");
});

router.get('/login', (req, res) => res.render('../../views/login.ejs')); //Trebuie modificat
router.get('/signup', (req, res) => res.render('signup.ejs'));

module.exports = router;
