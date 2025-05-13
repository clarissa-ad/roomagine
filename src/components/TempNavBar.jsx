import { Link } from "react-router-dom";
import React from 'react';

// export const TempNavBar = () => {
//   return (
//     <nav
//       className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
//       <div className="flex items-center gap-2">
//         <div
//           className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
//         <h1 className="text-base font-bold md:text-2xl">Roomagine</h1>
//       </div>
//     </nav>
//   )
// }

// export const TempNavBar = () => {
//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
//         <h1 className="text-xl font-bold text-neutral-900">Roomagine</h1>
//       </div>
//     </nav>
//   );
// };

export const TempNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-neutral-900 border-b border-neutral-900 px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-xl font-bold text-white">Roomagine</h1>
      </div>
    </nav>
  );
};

