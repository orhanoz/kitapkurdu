
var express = require('express');
var router = express.Router();
 
/* GET comments made! */
router.get('/', function(req, res, next) { 
    var models = req.app.locals.models;
    var bookId = req.query.bookId;
    var userId = req.query.userId;

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
        if(userId == 1) {
            models.comment.findAll().then(function (comments) {
                //All comments
                res.json({
                    status: {
                        message: "Congratz! All comments!",
                        success: true,
                    },
                    payload : comments
                });
            });
        } else {
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
    var imageLink =  req.body.imageLink; 
    var username =  req.body.username; 

    if(userId && bookId && comment && rating && selflink) {
        //TODO: check userId & create comments
        try {
            rating = parseFloat(req.body.rating)
            var new_comment = { userId:userId, bookId:bookId, comment:comment, rating:rating, bookName:bookName, author:author, selflink:selflink, imageLink:imageLink, username:username }
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


/* UPDATE comment in database */
router.put('/', function(req, res, next) { 
    var models = req.app.locals.models;
    var id = req.query.id;
    var comment = req.body.comment;
    var rating = req.body.rating;

    if(id && comment && rating) {
        //TODO: check userId & create comments
        try {
            rating = parseFloat(req.body.rating)
            models.comment.update(
                { comment: comment, rating: rating},
                { where: { id: id } }
            ).then(function (data) {
                console.log(data)
                res.json({
                    status: {
                       message: "Congratz! Comment updated!",
                       success: true,
                    },
                    payload : data
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


/* DELETE comment in database */
router.delete('/', function(req, res, next) { 
    var models = req.app.locals.models;
    var id = req.query.id; 

    if(id) {
        //TODO: check userId & create comments
        try {
            models.comment.destroy(
                { where: { id: id } }
            ).then(function (data) {
                console.log(data)
                res.json({
                    status: {
                       message: "Congratz! Comment deleted!",
                       success: true,
                    },
                    payload : data
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
