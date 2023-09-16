var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // index.ejs라는 페이지를 출력해라 
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
});

module.exports = router;