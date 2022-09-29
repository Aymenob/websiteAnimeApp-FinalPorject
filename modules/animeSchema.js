const mongoose=require("mongoose")

const Trailer=mongoose.Schema({
    animeName:{ type: String},
    animePicture:{ type: String},
    season:{type:String},
    trailerLink:{type:String},
    animeDescription:{type:String},
    genre: {type: String},
    episodes:[mongoose.Schema.Types.Mixed],
    favorites:{type:String}
})
module.exports=mongoose.model("Trailer",Trailer)
