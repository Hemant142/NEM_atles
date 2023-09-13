const express=require("express");
const {UserModel} =require("../model/user.model")

const userRouter=express.Router()


// posting the data into database
userRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    const user=new UserModel(payload)
    await user.save();
    res.send("Data has been added to the database")
})
// <===========================get  the data from the data base==================================================================>

userRouter.get("/",async(req,res)=>{
    const q=req.query;
    // const users= await UserModel.find()
    const users= await UserModel.find(q)
    res.send(users)
})

// <====================================================Update the Data============================================================>

userRouter.patch("/update/:userId",async(req,res)=>{
const {userId}=req.params;
const payload=req.body;
await UserModel.findByIdAndUpdate({_id:userId},payload)
res.send(`Document with Id: ${userId} has been updatred
`)
})


// <==================================================Delete the Data===============================================================>


userRouter.delete("/delete/:userId",async(req,res)=>{
    const {userId}=req.params;
   
    await UserModel.findByIdAndDelete({_id:userId})
    res.send(`Document with Id: ${userId} has been deleted`)
    })

    module.exports={
        userRouter
    }