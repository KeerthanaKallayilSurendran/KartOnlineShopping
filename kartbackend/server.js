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
const SALT_ROUNDS = 5

dbConnect();

// app.use(flash);
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(morgan('dev'))

// Add these two lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())






app.post('/signup', async (req, res) => {
  try {
    const { email, username, mobile, gender, password: userPassword } = req.body
    const password = await bcrypt.hash(userPassword, SALT_ROUNDS)

    const succ = await User.findOne({ email })
    if (succ) {
      return res.json({ message: 'User already exists' })
    }
    const signupFormData = {
      username,
      email,
      mobile,
      gender,
      password
    };
    const userData = await User.create(signupFormData);

    res.json({ message: 'Signup successfully' })
  } catch (e) {
    console.log(e.message);
  }
});


app.post('/signin', async (req, res) => {
  try {
    const { email, password: userPassword } = req.body
    const user = await User.findOne({ email })
    const { password } = user
    if (user) {
      const isMatch = bcrypt.compare(password, userPassword)
      if (isMatch) {
        return res.json({ message: 'Signin successfully', success: true })
      }
      return res.json({ message: 'Signin Failed', success: false })
    }
    
    res.json({ message: 'user not existing', success: false })
  } catch (err) {
    res.json({ message: err.message });
  }
})





// app.post("/signin", (req, res) => {
//   console.log('65')
//   passport.authenticate("local", (err, user, info) => {
//     console.log(67)
//     if (err) throw err;
//     if (!user) res.json({ message: 'No User Exists'});
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.json({ message: 'Successfully Authenticated'});
//         console.log(req.user);
//       });
//     }
//   });
// });


app.listen(port, () => {
  console.log(`Server started`, port);
});


