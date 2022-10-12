const express=require("express")
const app=express()
require("dotenv").config()
app.listen(process.env.PORT ||7000,()=>{console.log("you server is running...")})

const router=require("./Routes/routes")
const animeRouter=require("./Routes/animeRoutes")
const fileUpload=require("express-fileupload")
const path=require('path')

const mongoose=require("mongoose") 
mongoose.connect(process.env.URL,()=>{"your data base is connected"})
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
app.use(express.json({limit:'50mb'}))
app.use(fileUpload({useTempFiles : true}))
app.use("/",router)
app.use("/",animeRouter)

//set up for deployment
app.use(express.static(path.join(__dirname,'./','client','build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','client','build','index.html'))
})

