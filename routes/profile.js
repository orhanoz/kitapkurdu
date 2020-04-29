var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET home page. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('profile', {page:'About Us', menuId:'about'});
});

module.exports = router;
