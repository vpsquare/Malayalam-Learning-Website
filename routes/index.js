var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/intro', function(req, res, next) {
  res.render('intro');
});
router.get('/lesson1', function(req, res, next) {
  res.render('lesson1');
});
router.get('/lesson2', function(req, res, next) {
  res.render('lesson2');
});
module.exports = router;
