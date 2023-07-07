import React from 'react';
import { Link } from 'react-router-dom';
const Header=()=>(
    <div className="header flex h-24 justify-around shadow-xl" >
      <div className="logo">
        <img className='h-20' src={require('./food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector-removebg-preview.png')}/>
      </div>
      <div className="nav-items  ">
        <ul className="nav flex ">
          <li className='p-4 block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  dark:text-white md:dark:text-blue-500'><Link to ='/'>Home </Link></li>
          <li className='p-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  dark:text-white md:dark:text-blue-500'><Link to="/about">About Us </Link></li>
          <li className='p-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  dark:text-white md:dark:text-blue-500'><Link to="/contact">Contact Us</Link></li>
          <li className='p-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  dark:text-white md:dark:text-blue-500'> Cart</li>
        </ul>
      </div>
    </div>
  );
  export default Header