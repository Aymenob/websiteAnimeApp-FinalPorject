var jwt = require('jsonwebtoken');
const path = require('path')
require("dotenv").config();
const { check } = require('express-validator');
const LoginValidation = [
  check("userName").notEmpty().withMessage("username is empty"),
  check("Password").notEmpty().withMessage("Password is empty").isLength({ min: 6 }).withMessage("your password is too short!")

]
const postValidation = [
  check("userName").notEmpty().withMessage("userName is empty"),
  check("Password").notEmpty().withMessage("Password is empty").isLength({ min: 6 }).withMessage("your password is too short!")
  ,
  check("Email").notEmpty().withMessage("Email is empty").isEmail().withMessage("please enter a valid email adress!"),
  check("Image").custom((value, { req }) => {
    if (req.files.Image.name) {
      return true
    } else {
      return false;
    }
  }).withMessage('Please upload a user  Image!').custom((value, { req }) => {
    if (path.extname(req.files.Image.name) === ".jpg" || path.extname(req.files.Image.name) === ".jpeg" || path.extname(req.files.Image.name) === ".png") {
      return true
    } else {
      return false;
    }
  }).withMessage('Please submit a valid image format!')
]
const modifyValidation = [
  check("userName").optional().notEmpty().withMessage("userName is empty"),
  check("Password").notEmpty().withMessage("Password is empty").isLength({ min: 6 }).withMessage("your password is too short!")
  , check("newPassword").optional().isLength({ min: 6 }).withMessage("your password is too short!"),
  check("Image").custom((value, { req }) => {
    if (path.extname(req.files.Image.name) === ".jpg" || path.extname(req.files.Image.name) === ".jpeg" || path.extname(req.files.Image.name) === ".png"
    ) {
      return true
    } else {
      return false;
    }
  }).withMessage('Please submit a valid Image format!')
]
const TrailerValidationx = [
  check("animeName").optional().notEmpty(),
  check("animePicture").optional().notEmpty(),
  check("season").optional().notEmpty(),
  check("trailer").optional().notEmpty(),
  check("animeDescription").optional().notEmpty(),
  check("genre").optional().notEmpty()
]
const Authentified = function (req, res, next) {
  try {
    const token = req.headers.token
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded) {
      return res.status(400).json("you are not authentified")
    }
    next()
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}
const TrailerValidation = function (req, res, next) {
  try {
    const { animeName, animePicture, season, trailer, animeDescription, genre, episodes, newEpisodes, favorites, New } = req.body

    if (animeName === "") {
      return res.status(400).json({ msg: "your input is empty" })
      next()
    }
    
    else if (animePicture === "") {
      return res.status(400).json({ msg: "your input is empty" })
      next()
    }
    else if (genre === "") {
      return res.status(400).json({ msg: "your input is empty" })
      next()
    }
    else if (season === "") {
      return res.status(400).json({ msg: "your input is empty" })
      next()
    }
    else if (trailer === "") {
      return res.status(400).json({ msg: "your input is empty" })
       next()
    }
    else if (animeDescription === "") {
      return res.status(400).json({ msg: "your input is empty" })
       next()
    }
    next()
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

module.exports = { Authentified, LoginValidation, postValidation, modifyValidation, TrailerValidation }