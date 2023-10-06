const mongoose = require("mongoose")

const appointmentSchema= mongoose.Schema({

    patientID:{
        type:mongoose.Types.ObjectId,
        ref:"patient"
    },

    dentistID:{
        type:mongoose.Types.ObjectId,
        ref:"dentist"
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