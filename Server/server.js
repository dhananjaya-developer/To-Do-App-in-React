const express = require('express')
const app = express()
var cors = require('cors')

const db=require('./DB/connection')
db();

app.use(cors())
app.use(express.json())
    
const task=require('./routers/TaskApis')
app.use('/task',task)



app.listen(4000,()=>console.log('Server started'))
