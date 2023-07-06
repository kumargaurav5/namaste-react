import React from 'react';
import { Link } from 'react-router-dom';
const Header=()=>(
    <div className="header">
      <div className="logo">
        <img src={require('./food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector-removebg-preview.png')}/>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li><Link to ='/home'>Home </Link></li>
          <li><Link to="/About">About Us </Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  );
  export default Header