var express = require('express');
var router = express.Router();

var Tags = require('../models/tags');

// GET /api/tags
router.get('/', function(req, res, next) {
  Tags.getTags().then(function(tags) {
    res.send(tags);
  });
});

module.exports = router;
