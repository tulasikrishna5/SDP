import React from 'react';
import './AdminHome.css'; // Create a separate CSS file for AdminHome if needed

export default function AdminHome() {
    return (
        <div>
            <section id="admin">
                <h2 align="center" style={{ fontFamily: "sans-serif" }}>Admin Dashboard</h2>
                <div className='admin-container'>
                    <div className='admin-box'>
                        <h3>Restaurant Owners</h3>
                        {/* Add component or logic to display restaurant owners */}
                        <ul>
                            <li>Restaurant Owner 1</li>
                            <li>Restaurant Owner 2</li>
                            {/* Display actual restaurant owner data here */}
                        </ul>
                    </div>
                    <div className='admin-box'>
                        <h3>Customer Accounts</h3>
                        {/* Add component or logic to display customer accounts */}
                        <ul>
                            <li>Customer 1</li>
                            <li>Customer 2</li>
                            {/* Display actual customer account data here */}
                        </ul>
                    </div>
                </div>
            </section>

            <section id='end'>
                <div className="bar">
                    <div><h4>FoodBuddy Admin Panel</h4></div>
                    <div><a href='#'>Logout</a></div>
                    {/* Add additional admin functionalities or links */}
                </div>
            </section>
        </div>
    );
}
