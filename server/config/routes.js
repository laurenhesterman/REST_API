var mongoose = require('mongoose');
var Data = mongoose.model('Data');
var datas = require('../controllers/datas.js');


module.exports = function(app) {
    app.get("/datas", (req, res) => { 
        datas.show(req, res)
        })
    app.get("/data/:id", (req, res) => { 
        datas.show_one(req, res)
        })
    app.post("/data", (req, res) => { 
        datas.create(req, res)
        })
    app.put("/datas/:id", (req, res) => { 
        datas.update(req, res)
        })
    app.delete("/data/:id", (req, res) => { 
        datas.delete(req, res)
        })
}                          
