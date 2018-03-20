var mongoose = require('mongoose');
// create the schema
var TaskSchema = new mongoose.Schema({
    title:  {type: String},
    description: { type: String },
    completed: {type: Boolean, default: 'false'},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
   }) 

   mongoose.model('Task', TaskSchema); 
   
// register the schema as a model
var Task = mongoose.model('Task', TaskSchema);