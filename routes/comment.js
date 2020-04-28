
var express = require('express');
var router = express.Router();
 
/* GET comments made! */
router.get('/', function(req, res, next) { 
    var models = req.app.locals.models;
    var bookId = req.query.bookId;
    var userId = req.query.bookId;

    if(bookId) {
        //TODO: fetch comments of 1 user!
        models.comment.findAll({
            where: { bookId: bookId }
        }).then(function (comments) {
            //A comment found!
            res.json({
                status: {
                    message: "Congratz! Book comments!",
                    success: true,
                },
                payload : comments
            });
        });
    } else if(userId) {
        //TODO: fetch comments of 1 user!
        models.comment.findAll({
            where: { userId: userId }
        }).then(function (comments) {
            //A comment found!
            res.json({
                status: {
                    message: "Congratz! User comments!",
                    success: true,
                },
                payload : comments
            });
        });
    }

});


/* ADD comment new to database */
router.post('/', function(req, res, next) { 
    var models = req.app.locals.models;  
    var userId = req.query.userId;
    var bookId = req.query.bookId;
    var comment = req.body.comment;
    var rating = req.body.rating;
    var bookName =  req.body.bookName;
    var author =  req.body.author; 
    var selflink =  req.body.selflink; 
    var imagelink =  req.body.imagelink; 

    if(userId && bookId && comment && rating && selflink) {
        //TODO: check userId & create comments
        try {
            rating = parseFloat(req.body.rating)
            var new_comment = { userId:userId, bookId:bookId, comment:comment, rating:rating, bookName:bookName, author:author, selflink:selflink, imageLink:imageLink }
            models.comment.build(new_comment)
                        .save()
                        .then(function (data) {
                            console.log(data)
                            res.json({
                                status: {
                                   message: "Congratz! New comment created!",
                                   success: true,
                                },
                                payload : { }
                            });
                        }); 
        } catch (error) {
            res.json({
                status: { 
                   message: "check parameters!",
                   success: false,
                },
                payload : { }
            });
        } 
    } else {
        res.json({
            status: { 
               message: "check parameters!",
               success: false,
            },
            payload : { }
        });
    }

    
});

module.exports = router;
