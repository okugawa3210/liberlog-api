var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var BookStatuses = sequelize.define('book_statuses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.INTEGER
  }
}, {
  underscored: true
});

module.exports = BookStatuses;
