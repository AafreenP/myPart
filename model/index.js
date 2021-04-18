const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sys_database" ,{ useUnifiedTopology: true }, (error)=>{
    if(!error){
        console.log("Success connected");
    }else{
        console.log("Error connecting to database");
    }
});

const Output = require("./page1.model")