const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

mongoose.connect('mongodb+srv://admin:Videsh123@cluster0.91nl5.mongodb.net/CATSNAKE?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = model('user', userSchema)

module.exports = User;

