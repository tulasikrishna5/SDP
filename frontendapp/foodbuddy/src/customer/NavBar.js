import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import classes from './navbar.module.css'

import HomePage from './HomePage';
import { useCart } from './useCart';
import Login from './Login';




export default function NavBar() {
    const user = { name : 'John' };

   
    const { cart } = useCart();

const logout = () =>{}

  return (
    <header className={classes.header}>
    <div className={classes.container}>
<Link to="/" className={classes.logo}>
    FoodBuddy
</Link>
<nav>
    <ul>
        {
            user?
            (<li className={classes.menu_container}>
            <Link to="/profile">{user.name}</Link>
            <div className={classes.menu}>
            <Link to="/profile">Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/login">Different Account?</Link>
            <Link to="/register">New Account?</Link>
            <a onClick={logout}>Logout</a>
            </div>
            </li>):
            (
            <Link to="/login">Login</Link>
        )
        }
        <li>
            <Link to="/adminlogin">
                Admin Login
            </Link>
            
            <Link to="/cart">
                Cart 
                {cart.totalCount>0&&<span className={classes.cart_count}>{cart.totalCount}</span>}
            </Link>
        </li>
    </ul>
</nav>

    </div>
    
    </header>
    
   
            
    
  )
}

