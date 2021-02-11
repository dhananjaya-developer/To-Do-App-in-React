const express=require('express')
const router=express.Router();
const mssql=require('mssql');

var dbConfig = {
    server:`DPOOJARI\\SQLEXPRESS`,//sql server name
    database:'PracticeTask',//Database name
    user:'sa', // Update it
    password:'ea', // Update it
    port:1433,
    options: {
        "encrypt": true,
        "enableArithAbort": true
        }
};
var conn= new mssql.ConnectionPool(dbConfig);

//get all task
router.get('/',(req,res)=>{
    conn.connect(function (err){
        if (err){
            console.log(err);
            return;
        }
        else{
            var request = conn.request();
               
            // query to the database and get the records
            request.query('select * from PracticeTask', function (err, recordset) {
    
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
    
            });
        }
     });
 });

 //Create new task
 router.post('/', (req,res)=>{
    let {text,day,reminder}= req.body;
    conn.connect(function (err){
        if (err) throw err;
        console.log("Connected!");   
        const id =makeid(6);    
        var sql="INSERT INTO [dbo].[PracticeTask] ([Name] ,[Date] ,[Reminder] ,[Id]) VALUES ('"+text+"' ,'"+day+"' ,'"+reminder+"' ,'"+id+"')";
        conn.query(sql, async function (err, result) {
          if (err) throw err;
          await res.send(result && {Name:text,Date:day,Reminder:reminder,Id:id});
          console.log("1 record inserted");
        });       
    });
    //res.sendStatus(200);
 });

 //Delete
 router.delete('/:id',async (req,res)=>{
    let sql=`DELETE FROM [dbo].[PracticeTask] WHERE [Id]='`+req.params.id+`'`;
    await conn.connect(async function (err){
        if (err) throw err;
        console.log("Connected!");
        await conn.query(sql, function (err, result) {
          if (err) throw err;
          res.sendStatus(200);
          console.log("1 record deleted");
        });       
    });
 });


 //get single task 
 router.get('/:id',(req,res)=>{
    conn.connect(function (err){
        if (err){
            console.log(err);
            return;
        }
        else{ 
            // create Request object
            var request = conn.request();
               
            // query to the database and get the records
            request.query("select * from PracticeTask where Id='"+req.params.id+"'", function (err, recordset) {
    
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
    
            });
        }
     });
 });

 //Update the task
 router.put('/:id',(req,res)=>{
    let {Name,Date,Reminder}= req.body;

    conn.connect(function (err){
        if (err) throw err;
        console.log("Connected!");       
        var sql="UPDATE [dbo].[PracticeTask] set Name='"+Name+"',Date='"+Date+"',Reminder='"+Reminder+"' where Id='"+req.params.id+"'";
        conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record updated");
        });       
    });
    res.sendStatus(200);
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 module.exports=router;