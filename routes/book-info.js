var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET users listing. */
router.get('/', utils.checkSession, function(req, res, next) {
    var q = req.query.q
    res.render('book-info', {selflink: q, userId: req.session.user.id});
});

module.exports = router;
