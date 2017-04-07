const getUsers = require('../../../users/index.js');

const getAllUsers = (req, res) => {
  getUsers.getAllUsers().then((data) => {
    res.send(data);
  });
}

module.exports = {
  getAllUsers,
}
