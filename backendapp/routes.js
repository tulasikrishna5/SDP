const customercontroller = require("./controllers/customercontroller")
const admincontroller = require("./controllers/admincontroller")

const express = require("express")
const router = express.Router()

// job seeker routes 

router.post("/insertcustomer",customercontroller.insertcustomer)
router.post("/checkjobseekerlogin",customercontroller.checkcustomerlogin)


// // admin routes
 router.get("/viewcustomers",admincontroller.viewcustomer)
 router.post("/checkadminlogin",admincontroller.checkadminlogin)
 router.delete("/deletejobseeker/:email",admincontroller.deletecustomer)

module.exports = router
