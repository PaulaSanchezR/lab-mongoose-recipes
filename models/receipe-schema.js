const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//base on that schema we create a blueprint 
// 
const recipeShema = new Schema({
title:{ type: String,  requiere: true, unique: true},
level:{type: String, enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']},
ingredients:{type: Array},
cuisine:{ type: String,require: true},
dishType:{ type: String, enum: ['Breakfast','Dish','Snack','Drink','Dessert','Other']},
image:{type:String,Default:'https://images.media-allrecipes.com/images/75131.jpg'},
duration:{type: Number, min :0},
creator:{type: String},
created: {type: Date,default: Date.now}
})

const ReceiptModel = mongoose.model("Receipe" ,recipeShema);
// we export the model to make it accessible in other file
module.exports = ReceiptModel;