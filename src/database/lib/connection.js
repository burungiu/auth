const Sequelize = require('sequelize');
const configFile = require('../../../config/config.json');
const config = Object.assign({}, configFile);
let  sequelize = null;

const getConnection = () => {
	if (!sequelize) {
	sequelize =	new Sequelize('basic_data', 'root', 'parolamysql123', {
  host: 'localhost',
  dialect: 'mysql',
});
}
  return sequelize;
};
module.exports = {
  getConnection,
};
