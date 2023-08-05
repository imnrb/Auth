import express, { Router } from 'express';
import dotenv from 'dotenv';
import userRoutes from '/routes/userRoutes.js'
dotenv.config();
const port=process.env.PORT;
const app=express()
app.get('/',(req,res)=>{
    res.send("Server is running")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

