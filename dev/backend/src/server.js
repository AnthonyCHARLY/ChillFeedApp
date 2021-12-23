const express = require('express');

const bodyParser = require('body-parser');

const connectDB = require("./config/db")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

connectDB();

const routes = require("./routes/index");

app.use('/api',routes);




app.listen(process.env.PORT || 5000, () => console.log('Up and running 🚀'));