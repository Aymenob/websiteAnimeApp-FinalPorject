const Trailer=require("../modules/animeSchema")



const postTrailer=async function (req,res) {
    try {
      const {animeName,animePicture,season,trailer,animeDescription,genre,episodes,favorites}=req.body
      const model= await new Trailer
({ animeName:animeName,animePicture: animePicture,season:season,trailer:trailer
,animeDescription:animeDescription,genre:genre,favorites:favorites,episodes:episodes,
   
 })
       const result = await model.save()
       return res.status(200).json(result)
    } catch (err) { return res.status(500).json({msg:err})}
}

const getTrailers=async function(req,res){
 try {
     const trailers=await Trailer.find({}).sort({ updatedAt:-1 }).limit(12)
     return  res.status(200).json(trailers)
 } catch (err) { return res.status(500).json({msg:err})}
}
const getTrailers2=async function(req,res){
    try {
        const trailers=await Trailer.find({}).limit(9)
        return  res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({msg:err})}
   }
const getEpisode=async function(req,res){
    const Id=req.params.id
    const number=req.body
    try {
        const episode=await Trailer.findOne({"_id":Id})
        return  res.status(200).json(episode)
    } catch (err) { return res.status(500).json({msg:err})}
   }
const updateTrailers=async function(req,res){
    const trailerId=req.params.id
    const {animeName,animePicture,season,trailer,animeDescription,genre,episodes,favorites}=req.body;console.log(episodes)
    try {
        const trailers=await Trailer.findOneAndUpdate({_id:trailerId},{animePicture,genre,animeName,season,trailer,animeDescription,episodes:episodes,favorites},{new:true})
        return  res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({msg:err})}
   }
module.exports={postTrailer,getTrailers,updateTrailers,getTrailers2,getEpisode}