const Treatment= require("../models/treatmentModel")


//get all treatment lists

exports.Treatment=async(req,res)=>{
    
 
    try{
 
     const allTreatment= await Treatment.find({})
     res.status(200).json(allTreatment)
 
 
 }catch(e){
     res.status(404).json({message:"oops!can't find the Treatment"})
 }
 }
 
 
 // get a single treatment
 
 
 exports.singleTreatment=async(req,res)=>{
     // get single bog
 
     try{
       const{id}=req.params
         const singleTreatment= await Treatment.findById(id).populate("treatment")
         res.status(200).json(singleTreatment)
 
     
 
     }catch(e){
         res.status(200).json({message:"oops! we could'nt find the Treatment"})
     }
     
 }
 
 
 // create a teatment
 
 exports.saveTreatment= async(req,res)=>{
 try{
 
     await Treatment.create(req.body)
     res.status(200).json({message:"Treatment is created"})
 
 }catch(e){
     res.status(400).json({message:"Treatment is not created please try again"})
 
 }
 
    
 }
 
 // update treatment
 
 exports.editTreatment=async(req,res)=>{
    try {
        await Treatment.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Edited Treatment" });
      } catch (e) {
        res.status(400).json({ message: "error" });
      }
 }
 
 
 // delete a Treatment
 
 exports.deleteTreatment=async(req,res)=>{
     try{
 
 
         const{id}=req.params
         const deleteTreatment= await Treatment.findByIdAndDelete(id)
 
 
         res.status(200).json(deleteTreatment)
     }catch(e){
         res.status(404).json({message:"can't deleted the Treatment"})
     }
    
 }