const mongoose = require('mongoose')

const User = new mongoose.Schema({
  firstname: { 
      type: String,
      required: true,
      message: 'Firstname is requiered' 
    },
    age: {
        type: Number,
        required: true,
    },
  email: { 
      type: String,
      required: true, 
      match: /.+\@.+\..+/, 
      unique: true, 
      message: 'Email already exists, please login' 
    },
  password: { 
      type: String, required: true, message: 'Password is requiered' },  
  token: { 
      type: String 
    },
    interests: {
      type: String

    },

  date: { type: Date, default: Date.now }
}, {collection: 'users'});

const model = mongoose.model('UserData', User);

module.exports = model

