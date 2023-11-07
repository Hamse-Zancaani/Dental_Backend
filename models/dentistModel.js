const mongoose = require("mongoose")

const dentistSchema= mongoose.Schema({

    DentistName: {
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