var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET users listing. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('register', {page:'About Us', menuId:'about'});
});

module.exports = router;
