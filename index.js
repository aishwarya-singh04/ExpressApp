// // 1. Require your Express model
// const { urlencoded } = require("body-parser");
// const express= require("express");
// //const path = path;

// // 2. Initialize your express app
// const app= express();

// //Generalize production port
// // const PORT= process.env.PORT || 5000;           //available port will be provided


// //3. Listen server request on PORT
// // app.listen(PORT, function(){
// //     console.log(`Server started at PORT ${PORT}`);
// // });


// //Handle Client Request (get, post, put, delete)
// // app.method('Route', callback(){})

// //Handle '/' Home Route

// // app.get('/', function(req, res){
// //     //making client-server model
// //     res.send("Hello from Express Server");
// // });

// // app.get('/about', function(req, res){
// //     res.send("Welcome to About Page");
// // })

// // app.get("/", (req,res)=>{
// //     console.log(req.url);
// // });

// // app.get("/about", (req,res)=>{
// //     console.log(req.url);   
// //     res.send("User requested for About Page");
// // });

// // app.get("/about", (req,res)=>{
// //     console.log(req.method);     
// //     res.send("User requested for About Page");
// // });

// // app.get("/contact", (req,res)=>{
// //     console.log(req.method);   
// //     console.log(req.headers);   
// //     console.log(req.query);   
// //     res.send("Hi from the server");
// // });


// //Response Methods

// // app.get("/contact", (req,res)=>{
// //     console.log(req.url); 
// //     console.log(req.method);   
// //     console.log(req.headers);   
// //     console.log(req.query);   
// //     res.write("<h1>Hi from the server</h1><br/>");
// //     res.write("I'll render your request");
// //     res.end();
// // });

// // app.get("/signin", (req,res)=>{
// //     console.log(req.url); 
// //     console.log(req.method);   
// //     console.log(req.headers);   
// //     console.log(req.query);   
// //     res.write("<h1>Hi from the server</h1><br/>");
// //     res.write("I'll render your request");
// //     res.end();
// //     res.sendFile(path.resolve(_dirname)+"/login.html");       //current directory
// // });

// app.get("/stdnlist", (req,res)=>{
//     res.json([
//         rno= "1", name="Pankaj",
//         rno= "2", name="Pooja",
//         rno= "3", name="me",
//     ])
    
// });

// // app.listen(3000,()=>{
// //     console.log("Server is running on 3000");
// // });

// // app.get('/', (req, res)=>{
// //     res.sendFile(_dirname + '/login.html');
// // });
// //body-parser encode the url and converts data into json format
// // app.get('/login.html', (req, res)=>{
// //     if(req.query.uname=="admin" && req.query.pwd=="manager")
// //     {
// //         res.send("Successful Login");
// //     }
// //     else{
// //         res.send("Invalid Login");
// //     }
// // });



// //the data send to the server behind 
// // const bodyParser = require('body-parser');
// // app.use(bodyParser, urlencoded({extended:true}));
// // app.use(bodyParser, json());
// // app.use(express, urlencoded({extended: true}));
// // app.use(express, json());
// app.post('/login.html',(req, res)=>{
//     if(req.body.uname=="admin" && req.query.pwd=="manager")
//     {
//         res.send("Successful Login");
//     }
//     else{
//         res.send("Invalid Login");
//     }
// });



// 1. Require your Express model
const express= require("express");
//const path = path;

// 2. Initialize your express app
const app= express();

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/homepage.html");
});
app.get('/homepage.html',(req,res)=>{
    res.sendFile(__dirname + "/homepage.html");
    
});
app.get('/about.html',(req,res)=>{
    res.sendFile(__dirname + '/about.html');
});
app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname + '/login.html');
    
});

app.get('/valid.html',(req,res)=>{
    res.sendFile(__dirname + '/valid.html');
    
});
app.get('/invalid.html',(req,res)=>{
    res.sendFile(__dirname + '/invalid.html');
    
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/login.html', (req, res) => {
    console.log(req.body);
  if (req.body.uname == 'admin' && req.body.pwd == '123') {
    // to use request.body, you need to import body-parser package
      res.sendFile(__dirname + '/valid.html');
    } else {
      res.sendFile(__dirname + '/invalid.html');
    }
  });

