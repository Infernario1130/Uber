const captainModel = require("../models/captain.model");

module.exports.createCaptain = async function({
    firstName,lastName,email,password,color,plate,capacity,vehicleType
}) {
    if (!firstName || !lastName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("Required field is missing.")
    }

    const captain = await captainModel.create({
        firstName,
        lastName,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }

    })
    return captain;
}