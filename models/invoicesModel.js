const mongoose= require("mongoose")

const invoiceSchema= mongoose.Schema({
   patientName:{
    type:String,
    required:true
   },

   treatmentName:{
     type:String,
     required:true
   },
    invoiceDate:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const invoicesModel= mongoose.model("invoice",invoiceSchema)
module.exports=invoicesModel