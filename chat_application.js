
const express = require('express');
const bodyParser= require('body-parser');

const app=express();

const loginRoute=require('./routers/chat_admin');
const messageRoute=require('./routers/chat_box');
app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoute);
app.use(messageRoute);

app.listen(4000);