const express=require('express')
const app=express();
const connectDB= require('./db')
const users=require('./routes/users')


const port=3000


//body parser
app.use(express.json());
//connect to DB
connectDB()


app.use('./api',users)

/// -> /api/users

app.get('/',(req,res)=>{
    console.log("I am inside home page route handler")
    res.send("Hello Jee , welcome here")
})

app.listen(port,()=>{
    console.log("Server is UP")
})
    