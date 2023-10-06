const mongoose= require("mongoose")

const invoiceSchema= mongoose.Schema({
    patientID:{
        type:mongoose.Types.ObjectId,
        ref:"patient"
    },
    appointmentID:{
        type:mongoose.Types.ObjectId,
        ref:"appointment"
    },
    treatmentID:{
        type:mongoose.Types.ObjectId,
        ref:"treatment"
    },
    invoiceDate:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})

const invoicesModel= mongoose.model("invoice",invoiceSchema)
module.exports=invoicesModel