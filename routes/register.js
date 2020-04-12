var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET users listing. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('register', {page:'About Us', menuId:'about'});
});
 
/* POST users listing. */
router.post('/', utils.checkSession, function(req, res, next) {

    var models = req.app.locals.models;  
    let name = req.body.name.trim();
    let surname = req.body.surname.trim();
    let email = req.body.email.trim();
    let about = req.body.about.trim();
    let pass = req.body.password.trim();
    let pass_again = req.body.password_again.trim(); 
    
    if(!name) {
        res.redirect("/register?success=false&code=1")
    } else if(!surname) {
        res.redirect("/register?success=false&code=2")
    } else if(!email) {
        res.redirect("/register?success=false&code=3")
    } else if(!about) {
        res.redirect("/register?success=false&code=4")
    } else if(!pass || !pass_again || pass != pass_again) {
        res.redirect("/register?success=false&code=5")
    } else {
        models.user.findAll({
            where: { email: email }
        }).then(function (users) {
            if (users.length != 0) { 
                res.redirect('/register?success=false&code=6');
            } else { 
                var new_user = { name: name, surname: surname, email: email, about: about, password: pass } 
                models.user.build(new_user)
                            .save()
                            .then(function (data) {
                                console.log(data)
                                req.session.user = data.dataValues
                                res.redirect("/register?success=true&code=7")
                            });
            }
        });
    }

});


module.exports = router;
