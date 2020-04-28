
var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');
 

/* POST users listing. */
router.post('/', function(req, res, next) { 
    var models = req.app.locals.models;  
    let comment = req.body.comment;
    let rating = req.body.rating;

    // try {
    //     email = email.replace(/\s+/, "");
    //     models.user.findAll({
    //         where: { email: email, password: pass }
    //     }).then(function (users) {
    //         if (users.length != 0) {
    //             //A user found!
    //             req.session.user = users[0].dataValues
    //             res.redirect('/login?status=success');
    //         } else {
    //             res.redirect('/login?status=failed');
    //         }
    //     });
    // } catch (error) {
    //     res.redirect('/login?status=failed');
    // } 
});

module.exports = router;
