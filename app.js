const dotenv = require('dotenv')
dotenv.config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const session = require('express-session')
const passport = require('passport')
const cors = require('cors')

const { sequelize } = require('./models');
const passportConfig = require('./utils/passport');

const routes = require('./routes')

const app = express();
passportConfig();
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

// rest api 위해 cors 허용
app.use(cors({
  origin: "http://localhost:8080",
  credentials: true,
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/img', express.static(path.join(__dirname, 'public/images')));

// const sessionOption = {
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.COOKIE_SECRET,
//   cookie: {
//     httpOnly: true,
//     secure: false,
//   },
// }
// app.use(session(sessionOption))
app.use(passport.initialize())
// app.use(passport.session())

app.use('/api/v1', routes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  // console error
  console.error(err)

  // render the error page
  res.status(err.status || 500);
  res.json(res.locals.err);
});

module.exports = app;
