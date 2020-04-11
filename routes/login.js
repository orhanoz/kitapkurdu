var express = require('express');
var router = express.Router();
var user = require('./../models/user')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {page:'Home', menuId:'home'});
  });


/* POST users listing. */
router.post('/', function(req, res, next) { 
    var sequelize = req.app.locals.sequelize;
    var models = req.app.locals.models; 

    let email = req.body.email;
    let pass = req.body.password;
    try {
        _mail = _mail.replace(/\s+/, "");
        models.users.findOne({
            where: { email: email, password: pass }
        }).then(function (users) {
            if (users.length != 0) {
                //A user found!
                return res.json({
                    status: {
                        success: false,
                        responseCode: 600,
                        message: "1 user found!"
                    },
                    data: users[0]
                });
            } else {
                return res.json({
                    status: {
                        success: true,
                        responseCode: 601,
                        message: "User not found!"
                    },
                    data: null
                });
            }
        });
    } catch (error) {
        return res.json({
            status: {
                success: false,
                responseCode: 603,
                message: "Exception: " + error.message
            },
            data: null
        });
    } 
    res.render('login', {page:'About Us', menuId:'about'});
});

module.exports = router;
