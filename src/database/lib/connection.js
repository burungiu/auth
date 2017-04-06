'use strict'
const Sequelize = require('sequelize');
const config = require('../../config');
let  sequelize = null;

const getConnection = () => {
	if (!sequelize) {
		sequelize =	new Sequelize(
			config.DATABASE.name,
			config.DATABASE.username,
			config.DATABASE.password, {
			  host: config.DATABASE.host,
			  dialect: config.DATABASE.dialect,
				define: {
        timestamps: false,
        freezeTableName: true,
      },
			}
		);
	}
  return sequelize;
};

module.exports = {
  getConnection,
};
