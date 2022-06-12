//Exprerss framework
/*const express = require('express');
//mongo db package
const mongoose = require('mongoose');
var bodyParser =require('body-parser');
const testRoute = require('./routes/test');
const app = express();



//COneCtion to moongose
mongoose.connect('mongodb+srv://hamza:hamza@cluster0.6hmsv.mongodb.net/?retryWrites=true&w=majority');
const connection = mongoose.connection;
//check mongoose connextion
connection.on('connected', ()=> {console.log('Connected mongoose')})
connection.on('error', ()=> {console.log('Error In mongo Connection')})
//Mongoose promise idk
mongoose.Promise =global.Promise ;
//Body parser
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api',bodyParser.urlencoded({ extended: true}),  testRoute)
const Port = process.env.port || 5000;
app.listen( Port,()=> {
    console.log('Server ' ,Port);
     
})
module.exports = app ;*/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());const testRoute = require('./routes/test');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hamza:hamza@cluster0.6hmsv.mongodb.net/?retryWrites=true&w=majority');
const connection = mongoose.connection;
//check mongoose connextion
connection.on('connected', (err)=> {console.log(err)});
connection.on('error', ()=> {console.log('Error In mongo Connection')});

app.use('/api', testRoute);app.listen(80)
const Port = process.env.PORT || 8080;
app.listen( Port,()=> {
    console.log('Server ' ,Port);
     
})
module.exports = app 
