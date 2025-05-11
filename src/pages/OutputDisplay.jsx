import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import pdata from '../assets/ProductData.json'
import '../components/pages.css';

export function OutputDisplay() {
  return (
    <>
      <h1>Outputs Display</h1>
      <div className="product-card-container">
        {pdata.map((product, index) => (
          <ProductCard
            key={index}
            photo={product.photo}
            name={product.name}
            origin={product.origin}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}