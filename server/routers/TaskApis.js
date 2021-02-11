const express=require('express')
const router=express.Router();
const Task=require('../model/Task')

router.get('/',(req,res)=>{
    res.send('Helo world')
});

// router.get('/:id',getSubscriber, (req,res)=>{

// });

// router.post('/',async (req,res)=>{
    
// });

// router.patch('/:id',getSubscriber,async(req,res)=>{
    
// })

// // Deleting One
// router.delete('/:id', getSubscriber, async (req, res) => {
    
//   })

// async function getSubscriber(req,res,next){


//     next();
// }

module.exports=router;