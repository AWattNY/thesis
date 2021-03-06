const Sequelize = require('sequelize');
const connection = require('./dbConnect');

const Portfolio = connection.define('Portfolios', {
  date: Sequelize.DATE,
  portfolioValue: Sequelize.FLOAT,
  cash: Sequelize.FLOAT
});

module.exports = Portfolio;
