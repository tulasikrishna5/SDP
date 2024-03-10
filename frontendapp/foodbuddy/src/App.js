import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./customer/NavBar";
import HomePage from "./customer/HomePage";
import FoodPage from "./customer/FoodPage";
import CartPage from "./customer/CartPage";
import CartProvider from "./customer/useCart";
import Home from "./customer/Home";
import Login from "./customer/Login";
import Registration from "./customer/Registration";
import AdminLogin from "./admin/AdminLogin";
import React, { useState } from "react";
import AdminNavBar from "./admin/AdminNavBar";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdminStatus = (status) => {
    setIsAdmin(status);
  };

  return (
    <div className="App">
      <Router>
        <CartProvider>
          {isAdmin ? <AdminNavBar onLogout={() => toggleAdminStatus(false)} /> : <NavBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin setAdminStatus={setIsAdmin} />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/food/:id" element={<FoodPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
