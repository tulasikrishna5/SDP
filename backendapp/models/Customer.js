const mongoose = require("mongoose")

const customerschema = new mongoose.Schema({
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
  });

const customer = mongoose.model('customer', customerschema);

module.exports = customer;
