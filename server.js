var express = require('express');

var app = express();

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.text()); 
//app.use(bodyParser.json()); 

port = 2019 || process.env.PORT;

//listening to port
app.listen(port, ()=>console.log(`we're live  at port ${port}`));