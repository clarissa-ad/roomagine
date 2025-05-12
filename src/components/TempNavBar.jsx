import { Link } from "react-router-dom";
import React from 'react';

// export default function TempNavBar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="text-xl font-bold">Roomagine</div>
//       <div className="flex gap-6">
//         <a href="#" className="hover:text-blue-500">Home</a>
//         <a href="#" className="hover:text-blue-500">Products</a>
//         <a href="#" className="hover:text-blue-500">About</a>
//         <a href="#" className="hover:text-blue-500">Contact</a>
//       </div>
//     </nav>
//   );
// }

export const TempNavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">Roomagine</div>
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/InputDisplay">
          <button className="hover:text-blue-500">Generate!</button>
        </Link>
        <a href="#" className="hover:text-blue-500">Products</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </nav>
    </>
  )
}
