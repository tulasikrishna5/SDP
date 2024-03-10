const customercontroller = require("../controllers/customercontroller")

const express = require("express")
const customerrouter = express.Router()

// job seekeer routes
customerrouter.post("/insertcustomer",customercontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customercontroller.checkcustomerlogin)


module.exports = customerrouter
