const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'sesac2', 'userId', '1234',{
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = sequelize;