const Invoice=require('../models/invoicesModel')

// get all invoices


exports.Invoices=async(req,res)=>{
    // get all blog
 
    try{
 
     const allInvoices= await Invoice.find({})
     res.status(200).json(allInvoices)
 
 
 }catch(e){
     res.status(404).json({message:"oops!can't find the Invoices"})
 }
 }
 
 
 // get a single dentist
 
 
 exports.singleInvoice=async(req,res)=>{
     // get single bog
 
     try{
       const{id}=req.params
         const singleInvoice= await Invoice.findById(id).populate("invoice")
         res.status(200).json(singleInvoice)
 
     
 
     }catch(e){
         res.status(200).json({message:"oops! we could'nt find the Invoice"})
     }
     
 }
 
 
 // create a dentist
 
 exports.saveInvoices= async(req,res)=>{
 try{
 
     await Invoice.create(req.body)
     res.status(200).json({message:"Invoice is created"})
 
 }catch(e){
     res.status(400).json({message:"Invoice is not created please try again"})
 
 }
 
    
 }
 
 // update dentist
 
 exports.editInvoices=async(req,res)=>{
  try{
 
     const{id}=req.params
     const editInvoices= await Invoice.findByIdAndUpdate(id)
    res.status(200).json(editInvoices)
 
  }catch(e){
 
     res.status(200).json({message:"can't edit the Invoice"})
  }
 }
 
 
 // delete a dentist
 
 exports.deleteInvoices=async(req,res)=>{
     try{
 
 
         const{id}=req.params
         const deleteInvoices= await Invoice.findByIdAndDelete(id)
 
 
         res.status(200).json(deleteInvoices)
     }catch(e){
         res.status(404).json({message:"can't deleted the Invoice"})
     }
    
 }