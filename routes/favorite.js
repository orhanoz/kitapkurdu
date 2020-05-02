var express = require('express');
var router = express.Router(); 


router.get('/', function(req, res, next){
    var models = req.app.locals.models;  
    var userId = req.query.userId;
    var bookId = req.query.bookId;

    if(bookId && userId) {
        //TODO: check userId & create comments
        try {
            models.favorite.findAll({
                where: { bookId: bookId, userId:userId }
            }).then(function (favorites) {
                if(favorites.length != 0) {
                    //A favorite found!
                    res.json({
                        status: {
                            message: "Congratz! Book is a favorite!",
                            success: true,
                        },
                        payload : favorites[0]
                    });
                } else {
                    res.json({
                        status: { 
                           message: "The book is not favorite!",
                           success: false,
                        },
                        payload : { }
                    });
                }
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
    } else if(userId) {
        try {
            models.favorite.findAll({
                where: { userId:userId }
            }).then(function (favorites) {
                //A favorite found!
                res.json({
                    status: {
                        message: "Congratz! Favorites list!",
                        success: true,
                    },
                    payload : favorites
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
})

/* DELETE comment in database */
router.delete('/', function(req, res, next) { 
    var models = req.app.locals.models;
    var userId = req.query.userId;
    var bookId = req.query.bookId;

    if(bookId && userId) {
        //TODO: check userId & create comments
        try {
            models.favorite.destroy(
                { where: { bookId:bookId, userId:userId } }
            ).then(function (data) {
                console.log(data)
                res.json({
                    status: {
                       message: "Congratz! Favorite deleted!",
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

/* ADD new favorite new to database */
router.post('/', function(req, res, next) { 
    var models = req.app.locals.models;  
    var userId = req.query.userId;
    var bookId = req.query.bookId;
    var bookName = req.body.bookName;
    var author =  req.body.author; 
    var selflink =  req.body.selflink;
    var imageLink =  req.body.imageLink;

    if(userId && bookId && selflink) {
        //TODO: check userId & create comments
        try {
            var new_favorite = { userId:userId, bookId:bookId, bookName:bookName, author:author, selflink:selflink, imageLink:imageLink }
            models.favorite.build(new_favorite)
                        .save()
                        .then(function (data) {
                            console.log(data)
                            res.json({
                                status: {
                                   message: "Congratz! New favorite added!",
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