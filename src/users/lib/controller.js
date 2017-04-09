const User = require('../../models').Models.Users.Users;
const _ = require('lodash');

const getAllUsers = () => {
  return User.findAll().then((data) => data)
  .catch((err) => {
  	return err;
  });
}

const getUserByID = (accountId) => {
  return User.findOne({where:{idusers:accountId}}).then((data) => {
    console.log(data);
    if (_.isEmpty(data) || data === null || data.length === 0) {
      return Promise.reject("No user");
    } else {
      return data;
    }
  });
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
  })
  .catch((err) => Promise.reject(err));
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
  })
  .catch((err) => Promise.reject(err));
}

const removeUser = (accountId) => {
	return getUserByID(accountId).
  then(() => {
    return User.destroy({
      where: {
          idusers: accountId
      }})
      .then((data) => {
        return "Success";
      })
      .catch((err) => Promise.reject(err));
  })
  .catch((err) => Promise.reject(err));
}

const addUser = (userInfo) => {
	return User.create({
    name: userInfo.name,
    password: userInfo.password,
    email: userInfo.email,
    })
    .then((data) => {
      return "Success";
    })
    .catch((err) => Promise.reject(err));
}


module.exports = {
  getAllUsers,
  getUserByID,
  setBan,
  unsetBan,
  removeUser,
  addUser,
}
