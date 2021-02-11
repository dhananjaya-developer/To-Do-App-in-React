const express=require('express');
const bodyParser = require('body-parser');
const app=express();
var cors = require('cors');
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const taskRouter=require('./routers/Task')
app.use('/task',taskRouter)

app.listen(4000,()=>console.log('Server started'))