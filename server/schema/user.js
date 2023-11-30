const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
      },
  });
  
//   userSchema.pre('save', function(next) {
    
//     next();
//   });

  // Create a User model based on the schema
  const User = mongoose.model('User', userSchema);
  module.exports = User;