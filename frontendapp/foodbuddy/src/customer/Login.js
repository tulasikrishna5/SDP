import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkcustomerlogin', formData);
      if (response.data!=null) 
      {
        setMessage("Login Successful")
        navigate('/homepage')
       
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className="job-seeker-login-container">
      <h3>Customer Login</h3>
      {
        message ? <h4 className="error-message">{message}</h4> : <h4 className="success-message">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
