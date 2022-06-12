const mongoose =require('mongoose');

const rest = mongoose.Schema({
    name : String ,
    city : String, 
    image : String, 
    menu :[
        { catname : String ,
            cat : [{  itemname : String,
            itemprice : Number,}]
          
          
    }]

})
module.exports = mongoose.model('REST',rest);