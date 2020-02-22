var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('forgot-password', {page:'About Us', menuId:'about'});
});

module.exports = router;
