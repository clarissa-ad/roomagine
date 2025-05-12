import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import pdata from '../assets/ProductData.json'
import '../components/pages.css';
import '../components/comp.css';

export function OutputDisplay() {
  return (
    <>
      <h1>Image Generation Result</h1>
      <img src="src\assets\sample-output.jpg" className='imageResult' alt='Image Generation Result'></img>
      <h1>Recommended Items</h1>
      <div className="product-card-container">
        {pdata.map((product, index) => (
          <ProductCard
            key={index}
            photo={product.photo}
            name={product.name}
            origin={product.origin}
            price={product.price}
            link={product.link}
          />
        ))}
      </div>
    </>
  );
}