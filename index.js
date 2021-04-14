// 1. Require your Express model
const express= require("express");

// 2. Initialize your express app
const app= express();

//Generalize production port
const PORT= process.env.PORT || 5000;           //available port will be provided


//3. Listen server request on PORT
app.listen(PORT, function(){
    console.log(`Server started at PORT ${PORT}`);
});


//Handle Client Request (get, post, put, delete)
// app.method('Route', callback(){})

//Handle '/' Home Route
app.get('/', function(req, res){
    //making client-server model
    res.send("Hello from Express Server");
});

app.get('/about', function(req, res){
    res.send("Welcome to About Page");
})