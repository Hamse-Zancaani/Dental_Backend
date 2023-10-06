const mongoose = require("mongoose")

const dentistSchema= mongoose.Schema({

    firstName: {
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String
        
    },
    email:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    }
})

const dentistModel =mongoose.model("dentist",dentistSchema)
module.exports=dentistModel