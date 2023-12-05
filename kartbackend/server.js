const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors');
const morgan = require('morgan');
const { dbConnect } = require("./mongodb");
const { User } = require("./Modals/userSchema");
const SALT_ROUNDS = 5
console.log(6); 

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(morgan('dev'))

// Add these two lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.post('/signup', async(req, res) => {
  console.log(758851)
  const signupFormData = {
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    gender: req.body.gender,
    password: await bcrypt.hash(req.body.password, SALT_ROUNDS) ,
  };
  try {
    console.log(27);
    const userData = await User.create(signupFormData);
    console.log(userData);
  } catch (error) {
    console.log(error.message);
  }
  res.json({ message: 'hello' })
});

console.log(40);

app.post('/signin', async(req, res) => {

  try {
    const check = await User.findOne({ email: req.body.email});
    if(check.password == req.body.password){
      res.json({ message: 'hello'})
    }
  } catch (error) {
    console.log(error.message);
  }

 
});




app.listen(port, () => {
    console.log(`Server stareted`);
});


