const express = require('express')
const app = express();
const router = express.Router();

//middleware
const auth =function(req,res,next){
    console.log("I am inside auth wala middleware")

    //tumhari shayta k liye dummy user add krr rha
    req.user={userId:1,role:"student"}

    if(req.user){
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not a valid user"
        })
    }
}



const isStudent = function(req,res,next){
    console.log("I am inside student wala middleware")

    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not a student"
        })
    }
}
 





const isAdmin= function(req,res,next){
    console.log("I am inside admin wala middleware")

    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not a admin"
        })
    }
}


//routes
router.get("/student",auth,isStudent,(req,res) =>{
    console.log("I am inside student route ")
    res.send("Student specific page")
})


router.get("/admin",auth,isAdmin,(req,res)=>{
    console.log("I am inside admin route")
    res.send("admin specific page")
})


 

module.exports= router