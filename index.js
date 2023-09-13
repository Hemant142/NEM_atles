const express=require("express")
const { connection } = require("./db");
const {userRouter} =require("./routes/user.routers")
const app=express();

app.use(express.json()) //  when ever ypoou want to add the data delete or update the data you have to write this

app.get("/",(req,res)=>{
    res.send("Welcom to Home Page")
})


app.use("/users",userRouter) //// to add delete or update you have to write first api/users/adddata like this 

app.listen(8080,async()=>{
    try{
        await connection
    console.log("Connected to the DB")
    console.log("Server is running at 8080")
    }
    catch(err){
        console.log(err)
    }
})