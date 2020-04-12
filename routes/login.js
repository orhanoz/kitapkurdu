var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');


/* GET home page. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('login', {gameState: 123});
});

/* POST users listing. */
router.post('/', function(req, res, next) { 
    var models = req.app.locals.models;  
    let email = req.body.email;
    let pass = req.body.password;

    try {
        email = email.replace(/\s+/, "");
        models.user.findAll({
            where: { email: email, password: pass }
        }).then(function (users) {
            if (users.length != 0) {
                //A user found!
                req.session.user = users[0].dataValues
                res.redirect('/login?status=success');
            } else { 
                res.redirect('/login?status=failed');
            }
        });
    } catch (error) {
        res.redirect('/login?status=failed');
    } 
});

module.exports = router;
