const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// import data
const data = require('./data.js');
// import model to make it available in this file
const ReceiptModel = require('./models/receipe-schema')

//                 mongidb protocol
//                   |
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    // type of errro could be the path and also the mongodb is not running
    // rejection from the promise
    console.error('Error connecting to mongo', err);
  });


  ReceiptModel.create({
        title: 'Sancocho',
        level: 'Easy Peasy',
        ingredients: ['3 papas', '3 yucas', '1/2 cup Alinos', '1Lb Carne', '2 tablespoons trigisal'],
        cuisine: 'Asian',
        dishType: ['Dish'],
        duration: 40,
        creator: 'Chef LePapu'
  })
  .then( newReceipt => {
      console.log("New Recepit",  newReceipt)
  })
  .catch(err => {
    console.log ("Error no database")

  })