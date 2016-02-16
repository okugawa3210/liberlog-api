var express = require('express');
var router = express.Router();

var Books = require('../models/books');

// GET /api/books
router.get('/', function(req, res, next) {
  Books.getBooks(req.query).then(function(books) {
    res.send(books);
  });
});

// GET /api/books/:id
router.get('/:id', function(req, res, next) {
  Books.getBook(req.params.id).then(function(books) {
    res.send(books);
  });
});

module.exports = router;
