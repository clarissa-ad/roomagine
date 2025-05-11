import { Link } from "react-router-dom";
import React from 'react';
import './nav.css';

export const TempNavBar = () => {
  return (
    <>
        <nav className="navbar">
            <Link to="/"><button>Home</button></Link>
            <Link to="/OutputDisplay"><button>Generate!</button></Link>
        </nav>
    </>
  )
}
