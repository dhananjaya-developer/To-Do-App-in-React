import express from 'express';
const app = express()
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology: true});

const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to database'))
    
app.use(express.json())
    
const subscribeRouter=require('./routers/TaskApi')
app.use('/task',subscribeRouter)


app.listen(4000,()=>console.log('Server started'))
