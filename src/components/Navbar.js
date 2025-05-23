import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="about" className='active'>About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="cart">Cart</Link></li>
            <li><Link to="admin">Admin</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
