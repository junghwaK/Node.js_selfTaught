const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false},
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
