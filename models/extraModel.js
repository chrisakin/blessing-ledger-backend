 
'use strict';
const mongoose = require('mongoose');          //Placing mongoose package in a variable mongoose
const Schema = mongoose.Schema;                // Assigning mongoose schema to variable 



//creating CategorySchema
const ExtraSchema = new Schema({
  amount : {
    type: Number,

    required: true
  },

  createdOn: {
    type: Date,
    default: Date.now
  },
  
});


//Exporting the image schema to reuse  
module.exports = mongoose.model('Currency', ExtraSchema);
