import React from 'react';
import './comp.css';
import { Link } from 'react-router-dom';

export function ProductCard({ photo, name, origin, price, link }) {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <div className="product-card-content">
        <div className="product-card-desc">
          <h1>{name}</h1>
          <div className="card-desc">
            <img src="src\assets\origin-marketplace.svg" alt="Country of Origin" />
            <p>{origin}</p>
          </div>
          <p>Price: ${price}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="cart" aria-label="Add to Cart">
            <img src="src\assets\cart.svg" alt="" />
          </button>
        </a>
      </div>
    </div>
  );
}