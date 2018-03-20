var mongoose = require('mongoose');
// create the schema
var DataSchema = new mongoose.Schema({
    title:  {type: String},
    description: { type: String },
    completed: {type: Boolean, default: 'false'},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
   }) 

   mongoose.model('Data', DataSchema); 
   
// register the schema as a model
var Data = mongoose.model('Data', DataSchema);