const mongoose=require("mongoose")

const Trailer=mongoose.Schema({
    animeName:{ type: String},
    animePicture:{ type: String},
    trailer:{type:String},
    season:{type:String},
    animeDescription:{type:String},
    genre: {type: String},
    episodes:[mongoose.Schema.Types.Mixed],
    favorites:{type:String},
   

}, {
    timestamps: true
  })
module.exports=mongoose.model("Trailer",Trailer)
