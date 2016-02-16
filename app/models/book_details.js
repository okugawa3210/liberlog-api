var Sequelize = require('sequelize');
var sequelize = require('../sequelize');
var Users = require('./users');
var BookStatuses = require('./book_statuses');

var BookDetails = sequelize.define('book_details', {
  book_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  rating: {
    type: Sequelize.INTEGER
  },
  views: {
    type: Sequelize.INTEGER
  },
  bookStatusId: {
    type: Sequelize.INTEGER,
    field: 'book_status_id'
  },
  returnOn: {
    type: Sequelize.DATE,
    field: 'return_on'
  },
  borroweredUserId: {
    type: Sequelize.INTEGER,
    field: 'borrowered_user_id'
  }
}, {
  underscored: true
});

BookDetails.belongsTo(Users, {
  as: 'borrowered',
  foreignKey: 'borroweredUserId'
});

BookDetails.belongsTo(BookStatuses, {
  as: 'bookStatus',
  foreignKey: 'bookStatusId'
});

module.exports = BookDetails;
