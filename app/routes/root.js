var express = require('express');
var router = express.Router();

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

// Resource Users
router.use('/users', require('./users'));
// Resource Tags
router.use('/tags', require('./tags'));
// Resource Books
router.use('/books', require('./books'));

module.exports = router;
