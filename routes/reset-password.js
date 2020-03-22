var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('reset-password', {page:'About Us', menuId:'about'});
});

module.exports = router;
