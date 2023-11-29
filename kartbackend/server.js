const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.post('/signup', (req, res) => {
  console.log(8);
  res.json({ message: 'hello' })
});


app.listen(port, () => {
    console.log(`Server stareted`);
});
