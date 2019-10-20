const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => 
  console.log('connect to db')
);

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and Running'));

