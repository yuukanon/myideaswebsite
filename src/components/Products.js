import React from 'react';
import hammock1 from './1Hammock Chair.jpg'

const Products = () => {
  return (
    <div className="product-container">
      <div className="left-container">
        <img src={ hammock1 } alt="hanging chair 1"/>
      </div>
      <div className="right-container">
        <h2>Hanging Chair with Hardware Kit - Max 330 lb.</h2>
        <p><b>[HARDWARE INCLUDED]</b> The hanging chair includes all hanging kit with an instruction. You don’t need to run for a hardware shop but enjoy relaxing time immediately.</p>
        <p><b>[STURDY]</b> The hammock chair is equipped with 38 inch long strong wood bar. It has strong strength for supporting your weight and can hold up to 300 lb. Perfect size to most people.</p>
        <p><b>[RELAXATION & RECHARGED]</b> MY IDEAS’ swing chair is very comfortable and provides a cozy feel and brings you a relaxed, zen mode immediately. Great for reading and drinking to relieve stress from everyday life.</p>
        <p><b>[DECOR]</b> Perfect for indoor and outdoor use. The color beige is a timeless and practical color that matches any modern decor style.</p>
        <p><b>[HAPPINESS GUARANTEE]</b> Our #1 priority is your happiness. If you are not happy with our product for any reason, we will resolve it. Refund it. Send you a new hammock chair. No questions are asked. Just reach out to us at any time. We are here for you.</p>
        <div></div>
        <button><a href="https://www.amazon.com/MY-IDEAS-Hammock-Chair-Hardware/dp/B08MQCJC15/" target="_blank">Buy on Amazon</a></button>
        
      </div>
    

      
    </div>

  )
}

export default Products;