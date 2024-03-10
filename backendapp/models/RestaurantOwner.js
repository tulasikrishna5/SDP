const mongoose = require("mongoose")

const restaurantownerschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required:true,
    },
    age: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
    restaurantname :{
        type:String,
        required:true,
    },
    pan:{
        type: String,
        required: true,
        unique:true
    },
    gst:{
        type: String,
        required: true,
        unique:true
    }
  });

const restaurantowner = mongoose.model('restaurantowner',restaurantownerschema);

module.exports = restaurantowner;
