var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', {page:'About Us', menuId:'about'});
});

module.exports = router;
