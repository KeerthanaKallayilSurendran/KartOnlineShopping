const bcrypt = require('bcrypt')
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan');
const { dbConnect } = require("./mongodb");
const { User } = require("./Modals/userSchema");
const session = require('express-session')
const passport = require('passport');
require("./auth")(passport);
const { userSignup, userSignin } = require('./controller')
const SALT_ROUNDS = 5

dbConnect();

// Middlewares 
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.post('/signup', userSignup)
app.post('/signin', userSignin)


app.listen(port, () => {
  console.log(`Server started`, port);
});


