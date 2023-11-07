const mongoose= require("mongoose")

const patientSchema= mongoose.Schema({

    patientName: {
        type:String,
        required:true

    },
   
    dateOfBirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})

const patientModel= mongoose.model("Patient",patientSchema)

module.exports=patientModel;