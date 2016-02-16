var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var BooksTags = sequelize.define('books_tags', {
  book_id: {
    type: Sequelize.INTEGER
  },
  tag_id: {
    type: Sequelize.INTEGER
  }
}, {
  underscored: true
});

module.exports = BooksTags;
