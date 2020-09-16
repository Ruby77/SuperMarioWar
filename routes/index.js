var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SUPER MARIO WARS', htitle: 'SMW' });
});

module.exports = router;
