const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan');
const { dbConnect } = require("./mongodb");
// const session = require('express-session')
const userrouter = require('./routers/userrouter')


dbConnect();

// Middlewares 
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// }));
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(27);
app.use('/', userrouter)
console.log(29);

app.listen(port, () => {
  console.log(`Server started`, port);
});


