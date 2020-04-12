var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('forgot-password', {page:'About Us', menuId:'about'});
});

/* GET users listing. */
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
                res.redirect('/forgot-password?status=success');
            } else { 
                res.redirect('/forgot-password?status=failed');
            }
        });
    } catch (error) {
        res.redirect('/forgot-password?status=failed');
    } 

});

module.exports = router;
