const express = require('express');
const User = require('../../models').Models.Users.Users;
const _ = require('lodash');
var jwt    = require('jsonwebtoken');
var superSecret = require('../../config.js').secret;

const loginUser = (username, password) => {
  return User.findOne({
    where: {
      username,
      password,
    }
  }).then((data) => {
    console.log(data);
    if (_.isEmpty(data) || data === null) {
      return Promise.reject({ success: false, message: 'Authentication failed. Wrong combination' });
    } else {
      const payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), //24 hours
        username:username,
        userid: data.dataValues.userid,
        admin: data.dataValues.is_admin,
        email: data.dataValues.email
      };
      var token = jwt.sign(payload, superSecret);
      return Promise.resolve({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }
  });
};

 module.exports = {
   loginUser,
 }
