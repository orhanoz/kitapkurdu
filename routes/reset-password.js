var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET users listing. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('reset-password', {page:'About Us', menuId:'about'});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    var models = req.app.locals.models;  
    var token = req.query.token;
    let pass = req.body.password.trim();
    let pass_again = req.body.password_again.trim(); 
    var email = utils.decrypt(token);

    //TODO: 
    // 1 - check pass & pass_again
    // 2 - find user with email 
    // 3 - update user password & redirect to dashboard!

    if(!pass || !pass_again || pass != pass_again) { 
        res.redirect("/reset-password?success=false&code=1") //1 - check password
    } else {
        try {
            models.user.findAll({
                where: { email: email }
            }).then(function (users) {
                if (users.length != 0) {
                    if (users[0].password == pass) {
                        res.redirect("/reset-password?success=false&code=4") //4 - old & new same
                    } else {
                        models.user.update(
                            { password: pass },
                            { where: { email: email } }
                        ).then(function (result) {
                            if(result[0] == 1) {
                                res.redirect("/reset-password?success=true&code=5") //5 - succeeded
                            } else {
                                res.redirect("/reset-password?success=false&code=3") //3 - operation failed
                            }
                        });
                    }
                } else { 
                    res.redirect("/reset-password?success=false&code=2") //2 - user not found
                }
            });
        } catch (error) {
            res.redirect("/reset-password?success=false&code=2") //2 - user not found
        } 
    }

});


module.exports = router;
