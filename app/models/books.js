var util = require('util');
var Sequelize = require('sequelize');
var sequelize = require('../sequelize');
var Users = require('./users');
var BookDetails = require('./book_details');
var BookStatuses = require('./book_statuses');
var Tags = require('./tags');
var BooksTags = require('./books_tags');

var Books = sequelize.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  publicatedOn: {
    type: Sequelize.DATE,
    field: 'publicated_on'
  },
  publisher: {
    type: Sequelize.STRING
  },
  registeredOn: {
    type: Sequelize.DATE,
    field: 'registered_on'
  },
  registeredUserId: {
    type: Sequelize.INTEGER,
    field: 'registered_user_id'
  },
  description: {
    type: Sequelize.TEXT
  },
  thumbnail: {
    type: Sequelize.TEXT
  },
  createdUserId: {
    type: Sequelize.INTEGER,
    field: 'created_user_id'
  },
  createdOn: {
    type: Sequelize.DATE,
    field: 'created_on'
  },
  updatedUserId: {
    type: Sequelize.INTEGER,
    field: 'updated_user_id'
  },
  updatedOn: {
    type: Sequelize.DATE,
    field: 'updated_on'
  }
}, {
  underscored: true
});

Books.belongsTo(Users, {
  as: 'registered',
  foreignKey: 'registeredUserId'
});
Books.belongsTo(Users, {
  as: 'created',
  foreignKey: 'createdUserId'
});
Books.belongsTo(Users, {
  as: 'updated',
  foreignKey: 'updatedUserId'
});

Books.belongsTo(BookDetails, {
  as: 'detail',
  foreignKey: 'id'
});

Books.belongsToMany(Tags, {
  through: BooksTags,
  foreignKey: 'book_id',
  otherKey: 'tag_id'
});

Books.getBook = function(id) {
  return Books.findById(id, findOption);
};

Books.getBooks = function(query) {
  var option = util._extend(findOption);
  if (query.tagId) {
    option.include[0].where = {
      id: query.tagId
    };
  }
  return Books.findAll(option);
};

var findOption = {
  attributes: [
    'id',
    'title',
    'author',
    'publicatedOn',
    'publisher',
    'registeredOn',
    'description',
    'thumbnail'
  ],
  include: [{
    model: Tags,
    attributes: [
      'id',
      'name'
    ]
  }, {
    model: BookDetails,
    as: 'detail',
    attributes: [
      'rating',
      'views',
      'returnOn'
    ],
    include: [{
      model: BookStatuses,
      as: 'bookStatus',
      attributes: [
        'id',
        'name'
      ]
    }, {
      model: Users,
      as: 'borrowered',
      attributes: [
        'firstname',
        'lastname'
      ]
    }]
  }, {
    model: Users,
    as: 'registered',
    attributes: [
      'firstname',
      'lastname'
    ]
  }, {
    model: Users,
    as: 'created',
    attributes: [
      'firstname',
      'lastname'
    ]
  }, {
    model: Users,
    as: 'updated',
    attributes: [
      'firstname',
      'lastname'
    ]
  }]
};

module.exports = Books;
