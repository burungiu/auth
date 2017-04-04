const express = require('express');
const connection = require('./database').getConnection();
const Sequelize = require('sequelize');
const users = {
  idusers: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'idusers',
    primaryKey: true,
  },
  name: {
	type: Sequelize.STRING,
	field: 'name',
}
};
let qconnection = connection.define('users', users, {
    timestamps: false //E necesar pentru a exclude campul definit in sequelize createdAt
});
var app = express();
app.get("/", function(req, res) {
 
  qconnection.findAll({where: {idusers: 0}}).then((data) => { res.send(data)});
});
console.log(connection);
app.listen(3002);
