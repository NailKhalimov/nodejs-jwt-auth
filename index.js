const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//auth routes
const authRoute = require('./routes/auth');

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => 
  console.log('connect to db')
);

//Middleware
app.use(express.json());

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and Running'));

