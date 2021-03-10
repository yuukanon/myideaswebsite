import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div>
       <ul className="navbar">
          <li><Link to='/'><h1>Home</h1></Link></li>
          <li><Link to='/products'><h1>Products</h1></Link></li>
          <li><Link to='/contactus'><h1>Contact Us</h1></Link></li>
        </ul>
    </div>

  )
}

export default Navbar;