require('pg').types.setTypeParser(1114, function(stringValue) {
  return new Date(stringValue + "+0900");
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://liberlog:liberlog@localhost:5432/liberlog', {
  define: {
    timestamps: false
  },
  timezone: '+09:00'
});

module.exports = sequelize;
