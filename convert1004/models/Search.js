const Sequelize = require('sequelize');

const sequelize = require('../urill/database');

const Product = sequelize.define('search',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Symbol :{
        type: Sequelize.STRING,
        allowNull: ture
    }},
    {
        timestamps: false,
        tableName:'search',
        freezeTableName: true
    }
    
);

module.exports = Product;