var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  login: {
    type: Sequelize.STRING
  },
  hashedPassword: {
    type: Sequelize.STRING,
    field: 'hashed_password'
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  mail: {
    type: Sequelize.STRING
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    field: 'is_admin'
  },
  isLock: {
    type: Sequelize.BOOLEAN,
    field: 'is_lock'
  },
  isDelete: {
    type: Sequelize.BOOLEAN,
    field: 'is_delete'
  },
  lang: {
    type: Sequelize.STRING
  },
  createdOn: {
    type: Sequelize.DATE,
    field: 'created_on'
  },
  updatedOn: {
    type: Sequelize.DATE,
    field: 'updated_on'
  }
}, {
  underscored: true
});

module.exports = Users;
