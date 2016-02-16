var Sequelize = require('sequelize');
var sequelize = require('../sequelize');
var BooksTags = require('./books_tags');

var Tags = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  sort: {
    type: Sequelize.INTEGER
  }
}, {
  underscored: true
});

Tags.hasMany(BooksTags);

Tags.getTags = function() {
  var Books = require('./books');
  return Tags.findAll({
    order: ['sort', 'id'],
    include: [BooksTags]
  }).then(function(tags) {
    tags.forEach(function(tag) {
      tag.setDataValue('count', tag.books_tags.length);
    });
    return tags;
  });
};

module.exports = Tags;
