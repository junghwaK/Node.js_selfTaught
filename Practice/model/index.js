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
//모델 Surf.js에 정의해 놓은 테이블을 가져오는거임! 고치면안됨.
db.Surf = require('./Surf')(sequelize, Sequelize);

module.exports = db;