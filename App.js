const express= require("express");

const app= express();
const dotenv= require("dotenv")
dotenv.config({path:"./.env"})

require("./server")

const authRoutes=require("./routes/authRoutes")
const patientRoutes= require("./routes/patientRoutes")
const dentistRoutes= require("./routes/dentistRoutes")
const appointmentRoutes=require('./routes/appointmentRoutes')
const treatmentRoutes=require("./routes/treatmentRoutes")
const invoiceRoutes=require("./routes/invoiceRoutes")
const paymentRoutes=require("./routes/paymentRoutes")



// setup the middleware

app.use(express.json())


// setup middleware

app.use('/auth',authRoutes)
app.use('/patient',patientRoutes)
app.use('/dentist',dentistRoutes)
app.use('/appointment',appointmentRoutes)
app.use('/treatment',treatmentRoutes)
app.use('/invoice',invoiceRoutes)
app.use('/payment',paymentRoutes)


app.listen(8000,()=>{
    console.log ("the port started at 8000")})