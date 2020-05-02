var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Sequelize = require('sequelize');
var databaseConfig = require('./config/database');
var utils = require('./config/utils');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: true,
  cookie: {
      expires: 600000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');     
  }
  next();
});


app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile'));
app.use('/logout', require('./routes/logout'));
app.use('/register', require('./routes/register'));
app.use('/forgot-password', require('./routes/forgot-password'));
app.use('/reset-password', require('./routes/reset-password'));
app.use('/search', require('./routes/search'));
app.use('/book-info', require('./routes/book-info'));
app.use('/comment', require('./routes/comment'));
app.use('/favorite', require('./routes/favorite'));



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 

 

var sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.hostname,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
});


var models = require('sequelize-import')(__dirname + '/models', sequelize);
app.locals.models = models; 
app.locals.sequelize = sequelize;


module.exports = app;
