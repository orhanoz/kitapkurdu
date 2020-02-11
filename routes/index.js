var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "kitapkurdudatabase.mysql.database.azure.com",
    user: "hohran@kitapkurdudatabase",
    password: "bambam70!"
  }); 

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM schema.kitap", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  res.render('contact', {page:'Contact Us', menuId:'contact'});
});



module.exports = router;
