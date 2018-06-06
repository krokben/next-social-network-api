require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const expressValidator = require('express-validator');

const app = express();
const port = process.env.PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// passport
app.use(passport.initialize());
app.use(passport.session());

// validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split('.');
    root = namespace.shift();
    formParam = root;

    while (namespace.length) {
      formParam += `[${name.space.shift()}]`;
    }
    return {
      param: formParam,
      msg,
      value
    };
  }
}));

const routes = {
  users: require('./routes/users')
};

app.use('/users', routes.users);

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
