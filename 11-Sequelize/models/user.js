const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
     name: Sequelize.STRING,
     email: Sequelize.STRING
      
    },
    {
      timestamps: false,
      tableName: 'user',
      freezeTableName: true
    }
    );

    //associations : 모두 함께 작용하는거 보고싶다면, 

    module.exports = User;