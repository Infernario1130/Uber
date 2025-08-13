const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service")

module.exports.registerCaptain = async function(req,res,next) {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(401).json({
            errors: errors.array()
        })
    }

    const {firstName,lastName,email,password,vehicle} = req.body;

    const isCaptainAlready = await captainModel.findOne({
        email
    })

    if(isCaptainAlready) {
        return res.status(401).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstName,
        lastName,
        email,
        password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
    })

    const token = await captain.generateAuthToken()

    res.status(401).json({
        token,captain
    })
}