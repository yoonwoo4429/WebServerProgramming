var express = require('express');
var router = express.Router();

/* 도서검색 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'books/search.ejs' });
});

router.get('/cart', function(req, res){
  // 페이지 출력 -> render
  res.render('index', { title: '장바구니', pageName:'books/cart.ejs'});
});


module.exports = router;