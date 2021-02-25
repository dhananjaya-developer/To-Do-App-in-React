const express = require('express')
const app = express()
var cors = require('cors')
const serverless = require("serverless-http");

const db=require('./DB/connection')
db();

app.use(cors())
app.use(express.json())
    
const task=require('./routers/TaskAPI')
app.use('/.netlify/functions/server',task)



module.exports = app;
module.exports.handler = serverless(app);
