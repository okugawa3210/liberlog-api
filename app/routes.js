var express = require('express');
var router = express.Router();

var Tags = require('./models/tags');

// For Cross Origin
router.all('/*', function(req, res, next) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// GET /api/
router.get('/', function(req, res, next) {
  res.send({
    versino: '1.0.0',
    message: 'hello liberlog-api'
  });
});

// GET /api/tags
router.get('/tags', function(req, res, next) {
  Tags.findAll().then(function(tags) {
    res.send(tags);
  });
});

module.exports = router;
