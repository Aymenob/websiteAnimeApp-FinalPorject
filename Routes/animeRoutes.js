const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers,updateTrailers,getTrailers2,getEpisode,deleteEpisode,deleteTrailer,searchTrailer,findTrailer,getFavoriteTrailers }=require("../Controllers/animeController")
const {TrailerValidation}=require("../validation")
router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
router.get("/getTrailers2",getTrailers2)
router.get("/getEpisode/:animeName/:season",getEpisode)
router.put("/updateTrailer:id/:index",TrailerValidation,updateTrailers)//needs update
router.put("/deleteEpisode:id",deleteEpisode)
router.put("/getFavoriteTrailers",getFavoriteTrailers)
router.delete("/deleteTrailer:id",deleteTrailer)
router.get("/searchTrailer/:animeName/:genre",searchTrailer)
router.get("/findTrailer",findTrailer)

module.exports=router