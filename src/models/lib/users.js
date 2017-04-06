const Sequelize = require('sequelize');
const databaseConnection = require('../../database');
const dbConnectionHandler = databaseConnection.getConnection();
const users = {
  idusers: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'idusers',
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    field: 'name',
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
  },
  is_admin: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'is_admin',
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
  },
  banned: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'banned',
  },
  deleted: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'deleted',
  },
  language: {
    type: Sequelize.STRING,
    field: 'language',
  },
  createdOn: {
    type: Sequelize.DATE,
    field: 'createdOn',
  },
  avatar_link: {
    type: Sequelize.STRING,
    field: 'avatar_link',
  },
  describe: {
    type: Sequelize.TEXT,
    field: 'describe',
  },
};
const Users = dbConnectionHandler.define('users', users);
module.exports = {
  Users,
};
