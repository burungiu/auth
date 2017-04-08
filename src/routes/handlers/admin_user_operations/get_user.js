const getUsers = require('../../../users/index.js');
const _ = require('lodash');
const getAllUsers = (req, res) => {
  getUsers.getAllUsers().then((data) => {
    res.status(200).send({status:200,data:data});
  });
}

const getUserByID = (req, res) => {
	if (isNaN(req.params.accountId)) {
		return res.status(400).send({status:400, message:"Bad request"});
	}
	getUsers.getUserByID(req.params.accountId).then((data) => {
		if (_.isEmpty(data) || data === null) {
			res.status(204).send();
		} else {
			res.status(200).send({status:200,data:data});
		}
	});
}

module.exports = {
  getAllUsers,
  getUserByID,
}
