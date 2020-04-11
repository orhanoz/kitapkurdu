var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports.checkSession =  (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/login');
    } else {
        next();
    }    
};