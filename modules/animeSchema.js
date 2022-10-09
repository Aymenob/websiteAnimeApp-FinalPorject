const mongoose=require("mongoose")

const Trailer=mongoose.Schema({
    animeName:{ type: String,required: true},
    animePicture:{ type: String,required: true },
    trailer:{type:String,required: true },
    season:{type:String,required: true },
    animeDescription:{type:String,required: true },
    genre: {type: String,required: true },
    episodes:[mongoose.Schema.Types.Mixed],
    
   

}, {
    timestamps: true
  })
module.exports=mongoose.model("Trailer",Trailer)
