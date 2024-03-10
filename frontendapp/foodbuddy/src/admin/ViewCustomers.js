import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function ViewCustomers() 
{
    const [customers,setCustomers] = useState([]);
    
    const fetchCustomers = async () =>{
        try {
            const response = await axios.get('http://localhost:2032/viewcustomers')
            setCustomers(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        fetchCustomers();
    },[]);

    const deleteCustomer = async (email)=> {
        try {
            await axios.delete(`http://localhost:2032/deletecustomer/${email}`);
      fetchCustomers();
        } catch (error) {
            console.error(error.message);
        }

    }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Our Customers</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(customers) && customers.length > 0 ? (
    customers.map((customer, index) => (
      <tr key={index}>
        <td>{customer.fullname}</td>
        <td>{customer.username}</td>
        <td>{customer.age}</td>
        <td>{customer.email}</td>
        <td>{customer.address}</td>
        <td>{customer.contact}</td>
        <td>
          <button onClick={() => deleteCustomer(customer.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  )
}
