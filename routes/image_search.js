var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('image_search', { title: process.env.APP_TITLE });
});

module.exports = router;
