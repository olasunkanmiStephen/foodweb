import React from 'react';
import '../Order/Order.css'
import imageorder from '../assets/order_image.png'

function Order() {
  return (
    <div>
      <div className="order" id="Order">
        <h1><span>Order</span> Now</h1>

        <div className="order_main">

          <div className="order_image">
            <img src={imageorder} alt="Order Image" />
          </div>

          <form action="#">

            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>

            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>

            <div className="input">
              <label htmlFor="number">Number</label>
              <input id="number" placeholder="Your number" />
            </div>

            <div className="input">
              <label htmlFor="quantity">How Much</label>
              <input type="number" id="quantity" placeholder="How many orders" />
            </div>

            <div className="input">
              <label htmlFor="food">Your Order</label>
              <input id="food" placeholder="Food name" />
            </div>

            <div className="input">
              <label htmlFor="address">Address</label>
              <input id="address" placeholder="Your address" />
            </div>

            <a href="#" className="order_btn">Order Now</a>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Order;
