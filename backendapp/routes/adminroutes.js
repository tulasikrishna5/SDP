const admincontroller = require("../controllers/admincontroller")


const express = require("express")
const adminrouter = express.Router()

// // admin routes
 adminrouter.get("/viewcustomers",admincontroller.viewcustomer)
 adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
 adminrouter.delete("/deletecustomer/:email",admincontroller.deletecustomer)

module.exports = adminrouter
