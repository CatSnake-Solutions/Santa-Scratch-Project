const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const cookieParser = require('cookie-parser');
const userController = require('./controller/userController')
const cookieController = require('./controller/cookieController');

// bcrypt, tokenization, new recipe api, testing

const PORT = 3000;
// mongoose.connect('mongodb+srv://scratch:britpeytonrossnickFTRI5@scratchproject.rqthe.mongodb.net/scratchproject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


// mongoose.connect('mongodb+srv://admin:Videsh123@cluster0.91nl5.mongodb.net/CATSNAKE?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


// const userRouter = express.Router();
// app.use('/', userRouter);

// Test route
app.post('/SignUp', userController.createUser, (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/plain; charset=utf-8')
    .send('Sign Up Route Reached on backend')
});

app.post('/Login', userController.verifyUser, (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/plain; charset=utf-8')
    .send('Login Route Reached on backend')
});   

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Catch all other API requests      
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;