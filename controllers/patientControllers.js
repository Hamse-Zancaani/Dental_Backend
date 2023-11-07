const Patient=require("../models/patientModel")

// get all patients

exports.patients=async(req,res)=>{
    // get all blog
 
    try{
 
     const  Patients= await  Patient.find({})
     res.status(200).json(Patients)
 
 
 }catch(e){
     res.status(404).json({message:"oops!can't find the  Patients"})
 }
 }
 
 
 // get a single dentist
 
 
 exports.singlePatient=async(req,res)=>{
     // get single bog
 
     try{
       const{id}=req.params
         const singlePatient= await  Patient.findById(id)
         res.status(200).json(singlePatient)
 
     
 
     }catch(e){
         res.status(200).json({message:"oops! we could'nt find the  Patient"})
     }
     
 }
 
 
 // create a dentist
 
 exports.savePatient= async(req,res)=>{
 try{
 
     await  Patient.create(req.body)
     res.status(200).json({message:" Patient is created"})
 
 }catch(e){
     res.status(400).json({message:" Patient is not created please try again"})
 
 }
 
    
 }
 
 // update dentist
 
 exports.editPatient=async(req,res)=>{
 
  try {
    await Patient.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Edited Patient" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};
 
 
 
 // delete a dentist
 
 exports.deletePatient=async(req,res)=>{
     try{
 
 
         const{id}=req.params
         const deletePatient= await  Patient.findByIdAndDelete(id)
 
 
         res.status(200).json(deletePatient)
     }catch(e){
         res.status(404).json({message:"can't deleted the  Patient"})
     }
    
 }