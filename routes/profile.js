var express = require('express');
var router = express.Router();
var utils = require('./../config/utils');

/* GET home page. */
router.get('/', utils.checkSession, function(req, res, next) {
    res.render('profile', { userId: req.session.user.id });
});


/* POST users listing. */
router.post('/', function(req, res, next) { 
    var models = req.app.locals.models;  
    let userId = parseInt(req.query.userId);

    try {
        models.user.findAll({
            where: { id: userId }
        }).then(function (users) {
            if (users.length != 0) {
                //A user found!
                res.json({
                    status: {
                        message: "Congratz! User fetched!",
                        success: true,
                    },
                    payload : users[0]
                });
            }
        });
        
    } catch (error) {
        //res.redirect('/login?status=failed');
    } 
});

module.exports = router;
