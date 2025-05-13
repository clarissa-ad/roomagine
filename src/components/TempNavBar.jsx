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
    <nav
      className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div
          className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Roomagine</h1>
      </div>
    </nav>
  )
}

// const Navbar = () => {
//   return (
//     <nav
//       className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
//       <div className="flex items-center gap-2">
//         <div
//           className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
//         <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
//       </div>
//       <button
//         className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
//         Login
//       </button>
//     </nav>
//   );
// };
