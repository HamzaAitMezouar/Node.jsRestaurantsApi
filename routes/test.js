const express =require('express');

const router =express.Router() ;
const { getRest ,insertRest} = require('../logic/rest');
module.exports=router ;

router.get('/',getRest);
console.log('it works just fine');




router.post('/',insertRest);
console.log('Inserted');
