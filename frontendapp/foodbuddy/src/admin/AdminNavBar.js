import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import styles from './AdminNavBar.module.css'; // Import CSS module

import AdminHome from './AdminHome';
import ViewCustomers from './ViewCustomers';

export default function AdminNavBar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here
    // For example, clear user session or state
    // After logout, navigate back to localhost:3000
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/" className={styles.active}>Home</Link></li>
          <li><Link to="/viewcustomers" className={styles.link}>View Customers</Link></li>
          <li><button onClick={handleLogout} className={styles.link}>Logout</button></li> {/* Logout button */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AdminHome />} exact />
        <Route path="/viewcustomers" element={<ViewCustomers />} exact />
      </Routes>
    </div>
  );
}
