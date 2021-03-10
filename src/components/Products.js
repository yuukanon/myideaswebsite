import React from 'react';
import hammock1 from './1Hammock Chair.jpg'

const Products = () => {
  return (
    <div className="product-container">
      <div className="left-container">
        <img src={ hammock1 } alt="hanging chair 1"/>
      </div>
      <div className="right-container">
        <h3>Hanging Chair with Hardware Kit - Max 330 lb.</h3>
        <p><b>[HARDWARE INCLUDED]</b> MY IDEA hanging chair includes all hanging kit with an instruction. You don’t need to run for a hardware shop but enjoy relaxing time immediately.</p>
        <p><b>[STURDY]</b>MY IDEAS’ hammock chair is equipped with 38 inch long strong wood bar. It has strong strength for supporting your weight and can hold up to 300 lb. Perfect size to most people.</p>
        <p>[RELAXATION & RECHARGED] MY IDEAS’ swing chair allows you to sit like a king or queen. It is very comfortable and provides a cozy feel and brings you a relaxed, zen mode immediately. Great for reading and drinking to relieve stress from everyday life.</p>
        <p>[DECOR] Create your dream home with this MY IDEAS’ hammock swing chair & matching pillows. Perfect for indoor and outdoor use. The color beige is a timeless and practical color that matches any modern decor style.</p>
        <p>[HAPPINESS GUARANTEE] MY IDEAS’ #1 priority is your happiness. If you are not happy with our hanging chair for any reason, we will resolve it. Refund it. Send you a new hammock chair. No questions are asked. Just reach out to us at any time. We are here for you.</p>
        <button>Buy on Amazon</button>
      </div>
      
    </div>

  )
}

export default Products;