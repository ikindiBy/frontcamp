var express = require('express');
var router = express.Router();
const { getAllNews, getNewsById } = require('../helpers/helpers');

/* GET news listing. */
router.get('/', function(req, res, next) {
  res.send(getAllNews());
});

/* GET news page by ID. */
router.get('/:id', (req, res, next) => {
  res.send(getNewsById(req.params.id));
});

/* PUT news page by ID. */
router.put('/:id', (req, res, next) => {
  res.send(`Your article is ${req.params.id}`);
});

/* DELETE news page by ID. */
router.delete('/:id', (req, res, next) => {
  res.send(`Your article is ${req.params.id}`);
});

module.exports = router;
