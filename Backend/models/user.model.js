const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
   
        firstName:{
            type: String,
            required: true,
            minlength: [4, "First name must be at least 4 characters long."]
        }, lastName:{
            type: String,
            minlength: [5, "Last name must be at least 5 characters long."]
        }
    , email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be atleast 5 characters long."]
    }, password: {
            type: String,
            select: false,
            minlength: 6
    }, socketId: {
        type: String
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET, {
        expiresIn:"24h"
    })
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model("user", userSchema)
 

module.exports = userModel