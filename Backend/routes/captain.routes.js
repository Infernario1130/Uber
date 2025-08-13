const express  = require("express");
const { body } = require("express-validator");
const router = express.Router();
const captainController = require("../controllers/captain.controller")


router.post("/register",[body("email").isEmail().withMessage("Invalid email"),body("password").isLength({min:6}).withMessage("Password should have atleast 6 characters."),body("firstName").isLength({min:4}).withMessage("First name must have atleast 4 characters."),body("vehicle.color").isLength({min:3}).withMessage("Color must have atleast 3 characters."),body("vehicle.plate").isLength({min:3}).withMessage("Plate must have atleast 3 characters."),body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be atleast 1."),body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid vehicle type.")],captainController.registerCaptain)

router.post("/login",[body("email").isEmail().withMessage("Invalid email."),body("password").isLength({min:6}).withMessage("Password should have atleast 6 characters.")],captainController.loginCaptain)

module.exports = router