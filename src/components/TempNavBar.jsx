import { Link } from "react-router-dom";
import React from 'react';


export const TempNavBar = () => {
  return (
    <>
        <nav class="fixed top-0 left-1/4 w-1/2 flex justify-between items-center p-5">
            <Link to="/"><button>Home</button></Link>
            <Link to="/OutputDisplay"><button>Generate!</button></Link>
        </nav>
    </>
  )
}
