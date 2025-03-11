import React from 'react';
import './banner.css';
import { NavLink } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2>Repair Services</h2>
        <h3>Up to <span className="highlight">70% off</span> - all t-shirts & Accessories</h3>
        <NavLink to="product" className={({isActive}) => isActive ? 'active' : ''}>
        <button style={{color:"red"}}>Explore More</button>
        </NavLink>
      </div>
      
  
    </div>

  );
};

export default Banner;