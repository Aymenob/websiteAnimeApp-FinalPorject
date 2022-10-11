const Trailer = require("../modules/animeSchema")
const { validationResult } = require('express-validator');


const postTrailer = async function (req, res) {
    try {
        const { animeName, animePicture, season, trailer, animeDescription, genre, episodes, favorites } = req.body
        const model = await new Trailer
            ({
                animeName: animeName, animePicture: animePicture, season: season, trailer: trailer
                , animeDescription: animeDescription, genre: genre, favorites: favorites, episodes: episodes,

            })
        const result = await model.save()
        return res.status(200).json(result)
    } catch (err) { return res.status(500).json({ msg: err }) }
}

const getTrailers = async function (req, res) {
    try {
        const trailers = await Trailer.find({}).sort({ updatedAt: -1 }).limit(72)
        return res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
const getTrailers2 = async function (req, res) {
    try {
        const trailers = await Trailer.find({}).sort({ createdAt: -1 }).limit(9)
        return res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
const getEpisode = async function (req, res) {
    const { animeName, season } = req.params

    try {
        const episode = await Trailer.findOne({ "animeName": animeName, "season": season })
        return res.status(200).json(episode)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
//------------------------Update trailer
const updateTrailers = async function (req, res) {
    const errors = validationResult(req);
    const trailerId = req.params.id
    const {index}=req.params
    const { animeName, animePicture, season, trailer, animeDescription, genre, episodes, newEpisodes, favorites, New } = req.body;console.log(req.body);console.log(req.params);console.log(episodes)
    try {
        if (index==='NaN') {
            return res.status(400).json({ msg:"invalid input fields"})
        }
        if (newEpisodes) {
            await Trailer.findOneAndUpdate({ _id: trailerId }, { $pull: { "episodes": episodes } }, { timestamps: New || false })
        }

        // update date only if New value is set true 
        if (index==='null') {
            
        const trailers = await Trailer.findOneAndUpdate({ _id: trailerId }, { animePicture, genre, animeName, season, trailer, animeDescription, favorites, $push: { "episodes":newEpisodes } }, { timestamps: New || false, returnDocument: 'after' })
        return res.status(200).json(trailers)
           
        }
        const trailers = await Trailer.findOneAndUpdate({ _id: trailerId }, { animePicture, genre, animeName, season, trailer, animeDescription, favorites, $push: { "episodes": { $each:[newEpisodes],$position:index>0?index:0} } }, { timestamps: New || false, returnDocument: 'after' })
        return res.status(200).json(trailers)

    } catch (err) { return res.status(500).json({ msg: err }) }
}
//------------------------------delete User
const deleteEpisode = async function (req, res) {
    const trailerId = req.params.id
    const { episodes, New } = req.body
    try {


        const Episode = await Trailer.findOneAndUpdate({ _id: trailerId }, { $pull: { "episodes": episodes } }, { timestamps: New || false })
        return res.status(200).json(Episode)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
//------------------------------delete Trailer

const deleteTrailer = async function (req, res) {
    const trailerId = req.params.id
    try {
        const deletedTrailer = await Trailer.findOneAndDelete({ _id: trailerId })
        return res.status(200).json(deletedTrailer)
    } catch (err) {
        return res.status(500).json({ msg: err })
    }
}
const searchTrailer = async function (req, res) {
    const { animeName, genre } = req.params; //console.log(req.params)
    try {
        if (genre === 'undefined') {
            const search1 = await Trailer.find({ animeName: { "$regex": animeName, "$options": "i" } })
            return res.status(200).json(search1)
        }
        else if (animeName === 'undefined') {
            const search1 = await Trailer.find({ genre: { "$regex": genre, "$options": "i" } })
            return res.status(200).json(search1)
        }
        
        const search = await Trailer.find({ $and: [{ animeName: { "$regex": animeName, "$options": "i" } }, { genre: { "$regex": genre, "$options": "i" } }] })
        return res.status(200).json(search)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
const findTrailer = async function (req, res) {
    try {
        const trailers = await Trailer.aggregate([{ $sample: { size: 1 } }])
        return res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
const getFavoriteTrailers = async function (req, res) {
    const ids=req.body
    try {
        const trailers = await Trailer.find({_id: {$in: ids}}).sort({ animeName: -1 }).limit(25)
        return res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({ msg: err }) }
}
module.exports = { postTrailer, getTrailers, updateTrailers, getTrailers2, getEpisode, deleteEpisode, deleteTrailer, searchTrailer,findTrailer,getFavoriteTrailers }