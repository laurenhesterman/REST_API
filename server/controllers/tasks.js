var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
    show: function(req, res) {
        Task.find({}, function(err, tasks) {
            console.log("test")
            if (tasks) {
                // console.log(JSON.stringify(tasks));
                res.json(tasks)
            }
            if (err) {console.log(err)
                res.json(err)
            };                 
                
            })
    },
    show_one: function(req, res) {
        console.log("test2")
        var thisid = req.params.id
        console.log(thisid)
        Task.findOne({_id: thisid}, function(err, tasks){
            if (err) {
                // console.log(JSON.stringify(tasks));
                res.json(err)
            }
            if (tasks) {
                res.json(tasks)
            };                 
                
            })
    },
    create: function(req, res) {  
        console.log("test3")   
        var new_task = new Task({
            title: req.body.title,
            description: req.body.description
         });
         console.log(new_task)
        new_task.save(function(err,tasks){
            if(err) {
                console.log('something went wrong');
                res.json(err)
            } else { // else console.log that we did well and then redirect to the root route
                console.log(new_task.id)
                res.json(tasks)
            }   
        })
    },
    update: function(req, res) {
        console.log("test4")
        var thisid = req.params.id
        console.log(thisid)       
        var updatetitle = req.body.title
        var updatedesc = req.body.description      
        Task.findOneAndUpdate({_id: thisid}, {$set:{title:updatetitle, description:updatedesc}}, {new: true}, function(err, tasks){
            if(err){
                console.log("Something wrong when updating data!");
                res.json(err)
            }    
            if(tasks) {
                res.json(tasks)
            }  
            
        });
        
    },
    delete: function(req, res) {
        console.log("test5")
        var thisid = req.params.id
        console.log(thisid)
        Task.find({_id: thisid}).remove( function(err, tasks){
            if(err){
                console.log("Something wrong when deleting data!");
            }
            if(tasks) {
                res.json(tasks)
            }
        });  
       
    }
    
    
}