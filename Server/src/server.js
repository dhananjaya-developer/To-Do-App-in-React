const express = require('express')
const app = express()
var cors = require('cors')
const serverless = require("serverless-http");

const db=require('./DB/connection')
db();

app.use(cors())
app.use(express.json())
    
const user=require('./routers/ServerLoginAPI')
app.use('/.netlify/functions/server',user)



module.exports = app;
module.exports.handler = serverless(app);
