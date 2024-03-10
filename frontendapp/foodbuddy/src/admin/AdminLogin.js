import React, { useState } from 'react';
import styles from './Admin.module.css'; // Import CSS module
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin({ setAdminStatus }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2032/checkadminlogin', formData);
      if (response.data != null) {
        // Set isAdmin to true if login is successful
        setAdminStatus(true);
        navigate("/adminhome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}><u>Admin Login</u></h3>
      {message ? <h4 className={`${styles.message} ${error && styles.error}`}>{message || error}</h4> : null}
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className={styles['form-group']}>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
