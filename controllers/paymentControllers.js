const Payment=require('../models/paymentModel')

// get all payments


exports.Payments=async(req,res)=>{
    // get all blog
 
    try{
 
     const allPayment= await Payment.find({})
     res.status(200).json(allPayment)
 
 
 }catch(e){
     res.status(404).json({message:"oops!can't find the Payment"})
 }
 }
 
 
 // get a single dentist
 
 
 exports.singlePayment=async(req,res)=>{
     // get single bog
 
     try{
       const{id}=req.params
         const singlePayment= await Payment.findById(id).populate("payment")
         res.status(200).json(singlePayment)
 
     
 
     }catch(e){
         res.status(200).json({message:"oops! we could'nt find the Payment"})
     }
     
 }
 
 
 // create a dentist
 
 exports.savePayment= async(req,res)=>{
 try{
 
     await Payment.create(req.body)
     res.status(200).json({message:"Payment is created"})
 
 }catch(e){
     res.status(400).json({message:"Payment is not created please try again"})
 
 }
 
    
 }
 
 // update dentist
 
 exports.editPayment=async(req,res)=>{
  try{
 
     const{id}=req.params
     const editPayment= await Payment.findByIdAndUpdate(id)
    res.status(200).json(editPayment)
 
  }catch(e){
 
     res.status(200).json({message:"can't edit the Payment"})
  }
 }
 
 
 // delete a dentist
 
 exports.deletePayment=async(req,res)=>{
     try{
 
 
         const{id}=req.params
         const deletePayment= await Payment.findByIdAndDelete(id)
 
 
         res.status(200).json(deletePayment)
     }catch(e){
         res.status(404).json({message:"can't deleted the Payment"})
     }
    
 }