const mongoose= require("mongoose")

const treatmentSchema= mongoose.Schema({

    treatmentName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fee:{
        type:Number,
        required:true
    }
})

const treatmentModel= mongoose.model("treatment",treatmentSchema)

module.exports=treatmentModel;