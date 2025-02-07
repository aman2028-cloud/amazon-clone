require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors");
const port = process.env.PORT || 5007;
// const url='https://amazon-6-qgg9.onrender.com'
const cookieParser = require("cookie-parser");
const DefaultData = require("./defaultdata");
require("./db/conn");
const router = require("./routes/router");
const products = require("./models/productsSchema");
const jwt = require("jsonwebtoken");
const path =require("path");


const corsOptions ={
    origin:"https://amazon-6-qgg9.onrender.com",
    credentials:true
}

app.use(cors(corsOptions));
// middleware
app.use(express.json());
app.use(cookieParser(""));

app.use(router);
// app.get("/",(req,res)=>{
//     res.send("your server is running");
// });


// for deploy//
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname,"/client/build")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"client","build","index.html"))
})


// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"));
// }

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();