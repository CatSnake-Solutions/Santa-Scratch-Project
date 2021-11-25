const User = require('../models/userModel')

const UserController = {}
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  UserController.createUser = (req, res, next) => {
    console.log('Create User middleware reached');
    const { name, email, username, password } = req.body;
    
    User.create({ name, email, username, password })
      .then(newUser => {
        res.locals.user_id = newUser.id;
        return next();
      })
      .catch(err => {
        return next({
          log: `userController.createUser: Failed to create new user. ${err}`,
          status: 400,
          message: { err: `userController.createUser: Failed to create new user. ${err}`},
        })
      });
    }

UserController.verifyUser = (req, res, next) => {
  console.log('verifyUser middleware reached');
  // write code here
  const { username, password } = req.body;
  User.findOne({ username: username })
  .then(newUser => { 
    if (password === newUser.password) {
      res.locals.user_id = newUser.id;
      return next();
    }
    else { 
      // Username or password does not match
      return next({
        log: `userController.verifyUser: Password does not match.`,
        status: 400,
        message: { err: `userController.verifyUser: Password does not match.`},
      })
    }
  })
  .catch(error => {
    return next({
      log: `userController.verifyUser: Failed to log in. ${error}`,
      status: 400,
      message: { err: `userController.verifyUser: Failed to log in. ${error}`},
    })
  })
};


module.exports = UserController;