// 1. Require your Express model
const express= require("express");
//const path = path;

// 2. Initialize your express app
const app= express();

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});

//Application level middleware
app.use((req,res,next)=>{
    console.log(`${req.url} ${req.method} ${req.ip} --${new Date()}`);
    next();
});

//Can arrange the sequence of execution of middleware
//1. Application Level
//2. Homepage
//3. Middleware 2

app.get('/',(req,res,next)=>{
    res.send("homepage");
    next();
});
app.use((req,res,next)=>{
    console.log("This is middleware 2");
    next();
});
//Route level middleware which will now run only for dashboard
//Used for authentication 
app.use('/dashboard',(req,res,next)=>{
    console.log("This is middleware 2");
    next();
});
//anothere way to authentic
app.get('/dashboard',auth, (req,res)=>{
    console.log("This is middleware 2");
    
});

app.get('/dashboard',(req,res)=>{
    res.send("dashboardpage");
});
app.post('/user',(req,res)=>{
    res.send("userpage");
});

function auth (req,res,next){
    if(req.query.pwd==="admin")
    {next();}
    else{
        res.send("You aren't an aunthentic user");
    }
    // console.log("middleware-2");
    // next();
}