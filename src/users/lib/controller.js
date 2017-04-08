const User = require('../../models').Models.Users.Users;

const getAllUsers = () => {
  return User.findAll().then((data) => data);
}

const getUserByID = (accountId) => {
  return User.findOne({where:{idusers:accountId}}).then((data) => data);
}
const setBan = (accountId) => {
	return User.findOne({ where: { idusers: accountId} })
  .then(function (project) {
    // Check if record exists in db
    if (project) {
      project.updateAttributes({
        banned: 1
      });
    } else {
    	return false;
    }
  });
}

const unsetBan = (accountId) => {
	return User.findOne({ where: { idusers: accountId} })
  .then(function (project) {
    // Check if record exists in db
    if (project) {
      project.updateAttributes({
        banned: 0
      });
    } else {
    	return false;
    }
  });
}

module.exports = {
  getAllUsers,
  getUserByID,
  setBan,
  unsetBan,
}
