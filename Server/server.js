const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
var cors = require('cors')

const db=require('./DB/connection')
db();

app.use(cors)
app.use(express.json())
    
const subscribeRouter=require('./routers/TaskApis')
app.use('/task',subscribeRouter)


app.listen(4000,()=>console.log('Server started'))
