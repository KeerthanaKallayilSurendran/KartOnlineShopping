const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan');
const { dbConnect } = require("./mongodb");
// const session = require('express-session')
const userrouter = require('./routers/userRouter')
const adminrouter = require('./routers/adminRouter')


dbConnect();

// Middlewares 
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userrouter)
app.use('/admin', adminrouter)
app.listen(port, () => {
  console.log(`Server started`, port);
});


