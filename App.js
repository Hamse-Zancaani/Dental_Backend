const express= require("express");
const mongoose=require("mongoose")
const app= express();
const cors=require('cors')
const dotenv= require("dotenv")
const PORT=process.env.PORT || 8000
dotenv.config({path:"./.env"})



// setup the database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to db ")
}).catch((e)=>{
    console.log("not connected to db ")
})


//setup the cors to allow the request from the frontend
app.use(cors())

const authRoutes=require("./routes/authRoutes")
const patientRoutes= require("./routes/patientRoutes")
const dentistRoutes= require("./routes/dentistRoutes")
const appointmentRoutes=require('./routes/appointmentRoutes')
const treatmentRoutes=require("./routes/treatmentRoutes")
const invoiceRoutes=require("./routes/invoiceRoutes")




// setup the middleware

app.use(express.json())


// setup middleware

app.use('/auth',authRoutes)
app.use('/patient',patientRoutes)
app.use('/dentist',dentistRoutes)
app.use('/appointment',appointmentRoutes)
app.use('/treatment',treatmentRoutes)
app.use('/invoice',invoiceRoutes)



app.listen(PORT,()=>{
    console.log (`the port started at ${PORT}`)})
