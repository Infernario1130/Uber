const mongoose = require("mongoose");

async function databaseConnector() {
     try {await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database is successfully connected.")
     } 
     catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = databaseConnector;