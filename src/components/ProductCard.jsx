import React from 'react';
import './comp.css';

export function ProductCard({ photo, name, origin, price }) {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <div className="product-card-content">
        <div className="product-card-desc">
          <h1>{name}</h1>
          <div className="card-desc">
            <img src=".\assets\origin-market.png" alt="Country of Origin" />
            <p>{origin}</p>
          </div>
          <p>Price: ${price}</p>
        </div>
        <div className="card-cart-icon">
          <img src="./assets/cart.svg" alt="Cart"></img>
        </div>
      </div>
    </div>
  );
}