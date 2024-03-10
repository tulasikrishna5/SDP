const Customer = require("../models/Customer");

const insertcustomer = async (request, response) => {
    try {
        const input = request.body;
        const customer = new Customer(input);
        await customer.save();
        response.send('Registered Successfully');
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const checkcustomerlogin = async (request, response) => {
    try {
        const input = request.body;
        const customer = await Customer.findOne(input);
        if (customer) {
            response.json({ success: true, name: customer.name }); // Return user's name upon successful login
        } else {
            response.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

module.exports = { insertcustomer, checkcustomerlogin };
