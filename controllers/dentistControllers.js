const Dentist= require("../models/dentistModel")

// get all dentists

exports.dentists=async(req,res)=>{
   // get all blog

   try{

    const dentists= await Dentist.find({})
    res.status(200).json(dentists)


}catch(e){
    res.status(404).json({message:"oops!can't find the dentists"})
}
}


// get a single dentist


exports.dentist=async(req,res)=>{
    // get single bog

    try{
      const{id}=req.params
        const singleDentist= await Dentist.findById(id).populate("dentist")
        res.status(200).json(singleDentist)

    

    }catch(e){
        res.status(200).json({message:"oops! we could'nt find the dentist"})
    }
    
}


// create a dentist

exports.saveDentist= async(req,res)=>{
try{

    await Dentist.create(req.body)
    res.status(200).json({message:"dentist is created"})

}catch(e){
    res.status(400).json({message:"dentist is not created please try again"})

}

   
}

// update dentist

exports.editDentist=async(req,res)=>{
 try{

    const{id}=req.params
    const editDentist= await Dentist.findByIdAndUpdate(id)
   res.status(200).json(editDentist)

 }catch(e){

    res.status(200).json({message:"can't edit the dentist"})
 }
}


// delete a dentist

exports.deleteDentist=async(req,res)=>{
    try{


        const{id}=req.params
        const deleteDentist= await Dentist.findByIdAndDelete(id)


        res.status(200).json(deleteDentist)
    }catch(e){
        res.status(404).json({message:"can't deleted the blog"})
    }
   
}