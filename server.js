const express=require("express")
const app=express()
require("dotenv").config()
app.listen(process.env.PORT ||7000,()=>{console.log("you server is running...")})
const cors=require("cors")

const express = require("express");
var cors = require('cors')
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:8081/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5000);
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

