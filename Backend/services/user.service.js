const userModel = require("../models/user.model");

module.exports.createUser = async function({
    firstName,lastName,email,password
}) {console.log("DEBUG: createUser received:", { firstName, lastName, email, password })
    if (!firstName || !email || !password ) {
            throw new Error("Required field is missing.")
    }

    const user = await userModel.create({
        
            firstName: firstName,
            lastName: lastName
        , email,
        password
    })
    return user
}


