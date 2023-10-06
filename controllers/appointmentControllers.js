const Appointment= require("../models/appointmentModel")

exports.Appointments=async(req,res)=>{
    // get all blog
 
    try{
 
     const allAppointments= await Appointment.find({})
     res.status(200).json(allAppointments)
 
 
 }catch(e){
     res.status(404).json({message:"oops!can't find the appointments"})
 }
 }
 
 
 // get a single dentist
 
 
 exports.singleAppointment=async(req,res)=>{
     // get single bog
 
     try{
       const{id}=req.params
         const singleAppointment= await Appointment.findById(id).populate("appointment")
         res.status(200).json(singleAppointment)
 
     
 
     }catch(e){
         res.status(200).json({message:"oops! we could'nt find the appointment"})
     }
     
 }
 
 
 // create a dentist
 
 exports.saveAppointments= async(req,res)=>{
 try{
 
     await Appointment.create(req.body)
     res.status(200).json({message:"Appointment is created"})
 
 }catch(e){
     res.status(400).json({message:"appointment is not created please try again"})
 
 }
 
    
 }
 
 // update dentist
 
 exports.editAppointment=async(req,res)=>{
  try{
 
     const{id}=req.params
     const editAppointment= await Appointment.findByIdAndUpdate(id)
    res.status(200).json(editAppointment)
 
  }catch(e){
 
     res.status(200).json({message:"can't edit the Appointment"})
  }
 }
 
 
 // delete a dentist
 
 exports.deleteAppointment=async(req,res)=>{
     try{
 
 
         const{id}=req.params
         const deleteAppointment= await Appointment.findByIdAndDelete(id)
 
 
         res.status(200).json(deleteAppointment)
     }catch(e){
         res.status(404).json({message:"can't deleted the appointment"})
     }
    
 }