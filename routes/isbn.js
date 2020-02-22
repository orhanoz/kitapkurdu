var express = require('express');
var Gisbn = require('gisbn');
Gisbn  = new Gisbn("", "AIzaSyB0XdBQk6e7OpmTHRHlWSLuXCkqqYnSXYM", "ca");
var router = express.Router();


router.post('/', function(req, res, next) {
    var isbn = req.body.fname;
    console.log(isbn);
    Gisbn.setIsbn(isbn);
    Gisbn.fetch(function(err, book){
        if (err){
            res.send(err);
        }
        console.log(book);
        res.send(book);
    });
    
});

module.exports = router;
