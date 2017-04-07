const User = require('../../models').Models.Users.Users;

const getAllUsers = () => {
  return User.findAll().then((data) => data);
}

module.exports = {
  getAllUsers
}
