const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const cors = require("cors");
const databaseConnector = require("./db/db");
const userRoutes = require("./routes/user.routes")
const captainRoutes = require("./routes/captain.routes")

databaseConnector()
app.use(cors());
app.use(express.json())
app.use(cookieParser())


app.use("/users",userRoutes);
app.use("/captain", captainRoutes)

module.exports = app