const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const dataModel = mongoose.model("Input");

router.get("/add", (req, res)=>{
    res.render("add-answer");
});

router.post("/add", (req, res)=>{

    console.log(req.body);

    //Setting
    var data = new dataModel();
    data.Answer = req.body.Answer;
    data.SimilarityIndex = req.body.SimilarityIndex;
    data.FacialExpressionValue = req.body.FacialExpressionValue;
    data.save((err, docs)=>{
        if(!err)
        {
            //res.redirect("/data/list")
            res.json({message : "Successfully Submitted your answer" , status:"OK"})
        }
        else{
            res.send("Error Occured");
        }
    });

    //res.render("add-answer");
});

router.get("/list" , (req, res)=>{

    

    //Getting
    dataModel.find((err, docs)=>{
        if(!err){
            res.render("list", {data : docs})
 
           // console.log(docs);
           // res.send("Data controller")
        }
    });
    //res.send("This is data router!!")
});

module.exports = router;