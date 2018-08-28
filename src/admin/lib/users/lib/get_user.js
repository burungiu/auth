const getUsers = require('../../../../users/index.js');
const _ = require('lodash');

const getAllUsers = (req, res) => {
  getUsers.getAllUsers()
  .then((data) =>
    res.status(200).send({status:200,data:data})
  )
  .catch((err) => {
  	res.status(503).send({status:503, message:"Database is down"});
  });
}

const getUserByID = (req, res) => {
  //Check if accountId is an valid decimal number
	if (isNaN(req.params.accountId)) {
		return res.status(400).send({status:400, message:"Bad request"});
	}
	getUsers.getUserByID(req.params.accountId)
  .then((data) => {
		if (_.isEmpty(data) || data === null) {
			res.status(204).send();
		} else {
			res.status(200).send({status:200,data:data});
		}
	})
  .catch((err) => {
    return res.status(404).send(err);
  });
}

module.exports = {
  getAllUsers,
  getUserByID,
}
