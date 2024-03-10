const Admin = require("../models/Admin");
const Customer = require("../models/Customer");


 const viewcustomer = async (request, response) => 
 {
    try 
    {
      const customers = await Customer.find();
      if(customers.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(customers);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  
  const deletecustomer = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const customer = await Customer.findOne({"email":email})
      if(customer!=null)
      {
        await customer.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {viewcustomer,deletecustomer,checkadminlogin}
