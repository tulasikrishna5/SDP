const express = require("express")
const mongoose = require("mongoose") //use mongoose instead of mongodb since we need to have schema
const cors = require("cors")

const dburl = "mongodb://localhost:27017/foodbuddy32"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB successfully")
}).catch((err) => {
    console.log(err.message)
});



const app = express()
app.use(express.json()) //to parse json data
app.use(cors())

const customerrouter = require("./routes/customerroutes")
const adminrouter = require("./routes/adminroutes")
app.use("",customerrouter)
app.use("",adminrouter)





const port = 2032
app.listen(port,()=>
{
    console.log("Server is running at port "+port)
})
