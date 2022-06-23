const REST = require('../models/restModel');
const CAT = require('../models/restModel');
const MENU = require('../models/restModel');
module.exports= {
   getRest :async (req,res ,next)=> {
        const rest = await REST.find();
       
        
               res.json({
            result : rest.map(res1=>{
                return {
                    name : res1.name ,
                    image: res1.image,
                    city: res1.city,
                    rating:res1.rating,      
                   
                     menu: res1.menu.map(res2=>{
                       
                       return {catname : res2.catname,
                        cat: res2.cat.map(res3=>{
                            return {
                                itemname:res3.itemname,
                                itemprice:res3.itemprice
                            }
                        })
                    } 
                     })    
                }
            })
        })
       
     
        console.log('it works GET fine');
     
     },
    insertRest :async(req, res,next)=>{

        let data = await new REST(req.body);
        const result = await data.save();
        
        res.send('Done' +result);
         
       },
    getbyName :async (req,res ,next)=> {
        const rest = await REST.find({city: req.body.city});
        console.log('REQ CITY' +req.body.city),
        console.log('REQ Bod ' +req.body)
        res.json({
            result : rest.map(res=>{
                return {
                    name : res.name ,
                    image: res.image,
                    city: res.city,
                    rating:res.rating,
                    menu: [{
                            catname:res.menu[0].catname,
                          cat:[{
                            itemname :res.itemname,
                            itemprice : res.itemprice,
                          }]  
                            
                        
                    }]
                   
                }
            })
        })
        console.log('Get By name');
     
     }
}
