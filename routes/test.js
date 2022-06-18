const express =require('express');

const router =express.Router() ;
const { getRest ,insertRest ,getbyName} = require('../logic/rest');
module.exports=router ;

router.get('/',getRest);
console.log('it works just fine');




router.post('/',insertRest);
console.log('Inserted');
router.get('/rest',getbyName);
console.log('get By NAme');
