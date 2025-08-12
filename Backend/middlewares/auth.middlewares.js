const dotenv = require("dotenv");
dotenv.config();

const userModel = require("../models/user.model")
const blockedTokenModel = require("../models/blockedToken.model")

const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

module.exports.authUser = async function(req,res,next) {
    const token   = req.cookies.token || req.headers.authorization;
    if(!token || !token.startsWith("bearer")) {
        res.status(401).json({
            error: "Authorization header is missing."
        })
        return;
    }
    const words = token.split(" ");
    const jwtToken = words[1];

    const isBlacklisted = await blockedTokenModel.findOne({token: jwtToken});

    if (isBlacklisted) {
        return res.status(401).json({
            error: "Unauthorized."
        })
    }

    try {
        const decodedValue = await jwt.verify(jwtToken,secretKey);
        const user = await userModel.findById(decodedValue._id)
        req.user = user
        next()
    } catch(error) {
        console.log("JWT verify error:", error)
        return res.status(401).json({
            error: "Unauthorized."
        })
    }
}