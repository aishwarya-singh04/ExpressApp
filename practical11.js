// 1. Require your Express model
const express= require("express");
//const path = path;

// 2. Initialize your express app
const app= express();

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});

app.get('/',(req,res,next)=>{
    res.sendFile(_dirname + '/homepage.html');
    next();
});
app.get('/dashboard',(req,res,next)=>{
    res.sendFile(_dirname + '/homepage.html');
    next();
});
app.get('/about',(req,res,next)=>{
    res.sendFile(_dirname + '/about.html');
    next();
});
app.get('/login',(req,res,next)=>{
    res.sendFile(_dirname + '/login.html');
    next();
});

// app.use(express, urlencoded({extended: true}));
// app.use(express, json());
app.post('/login.html',(req, res)=>{
    if(req.body.uname=="admin" && req.query.pwd=="manager")
    {
        res.sendFile(_dirname + '/valid.html');
    }
    else{
        res.sendFile(_dirname + '/invalid.html');
    }
});