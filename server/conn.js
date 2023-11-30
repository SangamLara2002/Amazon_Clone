require('dotenv').config();
const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB); 
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to the database!');
  });