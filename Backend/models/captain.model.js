const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET

const captainSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [4,"First name must have atleast 4 characteres."]
    } , lastName: {
        type: String,
        minlength: [4,"Last name must have atleast 4 characters."]
    } , email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must have atleast 5 characters."]
    } , socketId: {
        type: String,
    } , status: {
        type:String,
        enum: ["active","inactive"],
        default: "inactive"
    } , vehicle : {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be atleast 3 characters long"]
        } , plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must have atleast 3 characters."]
        } , vehicleType: {
            type: String,
            required: true,
            enum: ["car","motorcycle","auto"]
        }
    } , location: {
        longitude: {
            type: Number
        }, latitude : {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id},secretKey,{
        expiresIn: "24h"
    })
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel