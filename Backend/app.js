const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const cors = require("cors");
const databaseConnector = require("./db/db");
const userRoutes = require("./routes/user.routes")

databaseConnector()
app.use(cors());
app.use(express.json())

app.get("/",function(req,res) {
    res.send("Hello world")
});

app.use("/users",userRoutes)

module.exports = app