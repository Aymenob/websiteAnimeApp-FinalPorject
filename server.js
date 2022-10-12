const express=require("express")
const app=express()
require("dotenv").config()
app.listen(process.env.PORT ||8081,()=>{console.log("you server is running...")})
const cors=require("cors")
app.use(cors({origin:"http://localhost:3000"}))
const router=require("./Routes/routes")
const animeRouter=require("./Routes/animeRoutes")
const fileUpload=require("express-fileupload")
const path=require('path')

const mongoose=require("mongoose") 
mongoose.connect(process.env.URL,()=>{"your data base is connected"})

app.use(express.json({limit:'50mb'}))
app.use(fileUpload({useTempFiles : true}))
app.use("/",router)
app.use("/",animeRouter)

//set up for deployment
app.use(express.static(path.join(__dirname,'./','client','build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','client','build','index.html'))
})

