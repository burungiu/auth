const getUsers = require('../../../users/index.js');
const _ = require('lodash');
const getAllUsers = (req, res) => {
  getUsers.getAllUsers().then((data) => {
    res.status(200).send({status:200,data:data});
  })
  .catch((err) => {
  	res.status(503).send({status:503, message:"Database is down"});
  });
}

const getUserByID = (req, res) => {
	if (isNaN(req.params.accountId)) {
		//Check if accountId is an valid decimal number
		return res.status(400).send({status:400, message:"Bad request"});
	}
	getUsers.getUserByID(req.params.accountId).then((data) => {
		//Check if user doesn't exist
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
