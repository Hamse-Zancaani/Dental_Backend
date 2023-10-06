const mongoose= require("mongoose")

const paymentSchema= mongoose.Schema({

invoiceID:{
    type:mongoose.Types.ObjectId,
    ref:""
},
paymentDate:{
    type:String,
    required:true
},
amount:{
    type:Number,
    required:true
}
})

const paymentModel= mongoose.model("payment",paymentSchema)
module.exports=paymentModel
