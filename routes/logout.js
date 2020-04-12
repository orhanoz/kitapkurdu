var express = require('express');
var router = express.Router();
var utils = require('../config/utils');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.clearCookie('user_sid');
    res.redirect('/');
}); 

module.exports = router;
