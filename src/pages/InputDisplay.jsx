import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/pages.css';
import '../components/comp.css';

export function InputDisplay() {
  return (
    <>
        <h1>Image Generation Prompt</h1>
        <div className="input-container">
            <button className="image-input">
                <img src="src\assets\image-upload.svg"></img>
                <p>Upload an image of your room</p>
            </button>
            <div className="text-input">
                <h1>What's on your mind?</h1>  
                <h3>What would you like to add to your room?</h3>    
            </div>
        </div>

        <Link to="/OutputDisplay">
            <button>Generate your Image!</button>
        </Link>
    </>
  );
}