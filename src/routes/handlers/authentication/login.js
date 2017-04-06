const express = require('express');
const User = require('../../../models').Models.Users.Users;
var jwt    = require('jsonwebtoken');
var superSecret = require('../../../config.js').secret;

const loginFunction = (req, res) => {
  User.findOne({where: {
    name: req.body.name
  }}).then((data) => {
   if (data === null) {
     res.status(401).json({ success: false, message: 'Authentication failed. User not found.' });
   } else if (data) {
     if (data.dataValues.password != req.body.password) {
       res.json({ success: false, message: 'Authentication failed. Wrong password.' });
     } else {
       var token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), //24 hours
         data:req.body.name}, superSecret);
       res.json({
         success: true,
         message: 'Enjoy your token!',
         token: token
       });
    }}});
 };

 module.exports = {
   loginFunction
 }
