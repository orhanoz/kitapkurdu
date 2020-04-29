var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');


/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.session && req.session.user && req.cookies.user_sid) { 
        res.redirect('/');
    } else {
        res.render('forgot-password', {page:'About Us', menuId:'about'});
    }
});

/* POST users listing. */
router.post('/', function(req, res, next) {
    var models = req.app.locals.models; 
    let email = req.body.email.trim(); 
    try {
        email = email.replace(/\s+/, "");
        models.user.findAll({
            where: { email: email }
        }).then(function (users) {
            if (users.length != 0) {
                //A user found!
                var email = users[0].email;
                var fullName = `${users[0].name} ${users[0].surname}`
                var token = utils.encrypt(email)
                utils.sendPasswordResetEmail(email, fullName, token)
                res.redirect('/forgot-password?status=success');
            } else { 
                res.redirect('/forgot-password?status=failed');
            }
        });
    } catch (error) {
        res.redirect('/forgot-password?status=failed');
    } 

    // var encrypted = utils.encrypt(email)
    // var decrypted = utils.decrypt(encrypted)
    // console.log( "E: " + encrypted)
    // console.log( "D: " + decrypted)


});

module.exports = router;
