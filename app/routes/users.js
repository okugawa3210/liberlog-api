var express = require('express');
var router = express.Router();

var Users = require('../models/users');

// GET /api/users
router.get('/', function(req, res, next) {
  Users.findAll().then(function(users) {
    res.send(users);
  });
});

module.exports = router;
