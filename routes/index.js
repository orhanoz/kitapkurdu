var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session && req.session.user && req.cookies.user_sid) {
      res.render('index', {page:'About Us', menuId:'about'});
  } else {
      res.redirect('/login');
  }
});


module.exports = router;
