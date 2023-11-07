const mongoose = require("mongoose")

const appointmentSchema= mongoose.Schema({

    patientName:{
        type:String,
        required:true
    },
    dentistName:{
        type:String,
        required:true
    },
    appointmentDate:{
        type:String,
        required:true

    },
    starterTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const appointmentModel= mongoose.model("appointment",appointmentSchema)
module.exports=appointmentModel;