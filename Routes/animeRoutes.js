const express=require("express")
const router=express.Router()
const {postTrailer}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)

module.exports=router