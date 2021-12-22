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


/***exapmele */
const bcrypt = require("bcryptjs")

const password = "mypass123"
const saltRounds = 10

bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError
  } else {
    bcrypt.hash(password, salt, function(hashError, hash) {
      if (hashError) {
        throw hashError
      } else {
        console.log(hash)
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    })
  }
})

app.listen(process.env.PORT || 5000, () => console.log('Up and running 🚀'));