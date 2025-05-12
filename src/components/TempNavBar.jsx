import { Link } from "react-router-dom";
import React from 'react';


export const TempNavBar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-white shadow-md z-50">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/InputDisplay">
          <button>Generate!</button>
        </Link>
      </nav>
    </>
  )
}
