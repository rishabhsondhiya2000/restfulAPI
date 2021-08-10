const express=require('express');
const router=new express.Router();
const Student=require("../models/student");

//🔴 create  a new document/student
//Through Promises
// app.post("/student",(req,res)=>{
//     console.log(req.body);
//     const user= new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     });
// });
//Through Async Await
router.post("/student",async(req,res)=>{
    try{
        const user= new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }
});

// 🔴 Get all the data in Database
router.get("/student",async(req,res)=>{
    try{
        const userData= await Student.find();
        res.status(201).send(userData);
    }catch(err){
        res.status(400).send(err);
    }
});
// 🔴 Get Secific Data in Data base
router.get("/student/:id" ,async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Student.findById(_id);
        if(!data){
            res.status(404).send();
        }else{
            res.status(201).send(data);
        }
    }catch(err){
        res.status(500).send(err);
    }
});
// 🔴 Update The Data
router.patch("/student/:id" ,async(req,res)=>{
    try{
        const _id=req.params.id;
        const data =await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(data);
    }catch(err){
        res.status(404).send(err);
    }
});
// 🔴 Delete The Data
router.delete("/student/:id" ,async(req,res)=>{
    try{
        const _id=req.params.id;
        const data =await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }
        res.status(201).send(data);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports=router;