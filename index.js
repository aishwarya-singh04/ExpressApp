// 1. Require your Express model
const express=require("express");

// 2. Initialize your express app
const app= express();

//Generalize production port
const PORT= process.env.PORT || 4000;           //available port will be provided


//3. Listen server request on PORT
app.listen(PORT, function(){
    console.log(`Server started at PORT ${PORT}`);
});