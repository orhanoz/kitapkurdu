var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register', {page:'About Us', menuId:'about'});
});

module.exports = router;
