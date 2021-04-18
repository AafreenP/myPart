const mongoose = require("mongoose");

var OutputSchema = new mongoose.Schema({
    Answer : {
        type : String,
        required: "Required"
    },
    SimilarityIndex:{
        type : String,
        required : "Required"

    },
    FacialExpressionValue:{
        type : String,
        required :"Required"
    }

});

mongoose.model("Input", OutputSchema)