const mongoose =require('mongoose');

const catScheme = mongoose.Schema({
    itemname:String,
    itemprice:Number
})
const menuScheme = mongoose.Schema({
    catname:String,
    cat :[catScheme]
})

const rest = mongoose.Schema({
    name : String ,
    city : String, 
    image : String, 
    rating : Number,
    menu :[menuScheme]

})

module.exports = mongoose.model('MENU',menuScheme);
module.exports = mongoose.model('CAT',catScheme);
module.exports = mongoose.model('REST',rest);