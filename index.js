const express=require("express")
const router=require("./Routes/routes")
const animeRouter=require("./Routes/animeRoutes")
const fileUpload=require("express-fileupload")
require("dotenv").config()
const mongoose=require("mongoose") 
mongoose.connect(process.env.URL,()=>{"your data base is connected"})
const app=express()
const cors=require("cors")
app.use(cors({origin:"http://localhost:3000"}))
app.listen(8081,()=>{console.log("you server is running...")})
app.use(express.json({limit:'50mb'}))
app.use(fileUpload({useTempFiles : true}))
app.use("/",router)
app.use("/",animeRouter)



