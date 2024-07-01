
// its controlar class
const path = require('path');
var express = require('express');
var app =express();
var bodyparser = require('body-parser');
var cors = require('cors');
var authData = require('./controller/authData');
var sendSms = require('./controller/sendSms');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const Port = 3000;
var conn=app.listen(Port,function(){
    console.log('server is runing '+Port)
});
app.post('/api/signin',authData.signin);
app.post('/api/sign_out',authData.sign_out);
app.post('/api/send_message',sendSms.sendmessage);
app.post('/api/add_record',sendSms.addRecord);

module.exports=app;
