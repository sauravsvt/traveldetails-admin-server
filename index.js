
const express = require('express');
const bodyParser=require("body-parser");
const routes = require('./routes/routes');
const mongoose = require("mongoose"); 
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/work');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));

db.once('open', function(callback){
    console.log("connection succeeded");
})

const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 
app.use(bodyParser.json());
app.use('/', routes)

app.listen(3001, ()=> {
    console.log('SERVER IS RUNNING on 3001');
});