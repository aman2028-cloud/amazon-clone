const mongoose = require("mongoose");

const DB = "mongodb+srv://new_user:aman_2020@cluster0.hhcpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))
