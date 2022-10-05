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
    const {animeName,season}=req.params
    
    try {
        const episode=await Trailer.findOne({"animeName":animeName,"season":season})
        return  res.status(200).json(episode)
    } catch (err) { return res.status(500).json({msg:err})}
   }
   //------------------------Update trailer
const updateTrailers=async function(req,res){
    const trailerId=req.params.id
    const {animeName,animePicture,season,trailer,animeDescription,genre,episodes,newEpisodes,favorites,New}=req.body;
    try {
        if (newEpisodes) {
            await Trailer.findOneAndUpdate({_id:trailerId},{ $pull: { "episodes": episodes   }},{ timestamps: New||false})
               }

        // update date only if New value is set true 
       
        const trailers=await Trailer.findOneAndUpdate({_id:trailerId},{animePicture,genre,animeName,season,trailer,animeDescription,favorites, $push: { "episodes": newEpisodes   }},{ timestamps: New||false})
        return  res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({msg:err})}
   }
   //------------------------------delete User
const deleteEpisode=async function (req,res) {
    try {
        const trailerId=req.params.id
      const {episodes,New}=req.body

      const Episode=await Trailer.findOneAndUpdate({_id:trailerId},{ $pull: { "episodes": episodes   }},{ timestamps: New||false})
      return  res.status(200).json(Episode)
    } catch (err) { return res.status(500).json({msg:err})}
}
   //------------------------------delete Trailer

const deleteTrailer=async function(req,res) {
    const trailerId=req.params.id
    try {
        const deletedTrailer=await Trailer.findOneAndDelete({_id:trailerId})
        return res.status(200).json(deletedTrailer)
    } catch (err) {
         return res.status(500).json({msg:err})
    }
}
module.exports={postTrailer,getTrailers,updateTrailers,getTrailers2,getEpisode,deleteEpisode,deleteTrailer}