const UsersHandler = require('../../../users/index.js');
const _ = require('lodash');
const setBan = (req, res) => {
  UsersHandler.setBan(req.params.accountID).then((data) => {
    if (data === false) {
    	return res.status(404).send({status:404, message:"User not found"});
    } else {
    	return res.status(200).send({status:200, message: "User succesfuly banned"});
    }
  });
}

const unsetBan = (req, res) => {
  UsersHandler.unsetBan(req.params.accountID).then((data) => {
    if (data === false) {
    	return res.status(404).send({status:404, message:"User not found"});
    } else {
    	return res.status(200).send({status:200, message: "User succesfuly unbanned"});
    }
  });
}

module.exports = {
  setBan,
  unsetBan,
}
