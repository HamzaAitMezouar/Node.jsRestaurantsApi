const REST = require('../models/restModel');
module.exports= {
   getRest :async (req,res ,next)=> {
        const rest = await REST.find();
        res.json({
            result : rest.map(res=>{
                return {
                    name : res.name ,
                    image: res.image,
                    city: res.city,
                    menu: [{
                            
                            itemname :res.itemname,
                            itemprice : res.itemprice,
                            
                        
                    }]
                   
                }
            })
        })
        console.log('it works GET fine');
     
     },
    insertRest :async(req, res,next)=>{

        let data = await new REST(req.body);
        const result = await data.save();
        
        res.send('Done' +result);
         
       
       }
}
