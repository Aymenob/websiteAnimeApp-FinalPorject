const express=require("express")
const {router}=require("./Routes/routes")
const fileUpload=require("express-fileupload")
const mongoose=require("mongoose") 
require("dotenv").config()
mongoose.connect(process.env.URL,()=>{"your data base is connected"})
const app=express()
app.listen(8081,()=>{console.log("you server is running...")})
app.use(express.json({limit:'50mb'}))
app.use(fileUpload({useTempFiles : true}))
app.use("/",router)


