const Sequelize = require('sequelize');

const config = require('../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//table 개수당 있어야함.
db.Surf = require('./Surf')(sequelize, Sequelize);

module.exports = db;