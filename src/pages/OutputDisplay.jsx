import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard';
import pdata from '../assets/ProductData.json'
import '../components/pages.css';
import '../components/comp.css';

export function OutputDisplay() {

  const { textInputs, uploadedImage, processedImage } = useSelector((state) => state.input);

  return (
    <>
      <h1>Image Generation Result</h1>
      <div className="output-container">
        {processedImage ? (
          <img src={processedImage} alt="Processed Room" className="imageResult" />
        ) : (
          uploadedImage && <img src={uploadedImage} alt="Uploaded Room" className="imageResult" />
        )}
      </div>
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