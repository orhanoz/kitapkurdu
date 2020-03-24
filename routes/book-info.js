var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var q = req.query.q
    res.render('book-info', {link: q});
});

module.exports = router;
