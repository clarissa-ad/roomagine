"use client";

import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import InputDisplay from '../../pages/InputDisplay'; // sesuaikan path-nya


// im not using this parr since we already have the tempnavbar. 
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
// }7777777777777777777777777777777777777

// export function HeroSectionOne() {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gray-50 dark:bg-neutral-900">
//         <h1
//           className="text-4xl md:text-5xl font-extrabold text-neutral-800 dark:text-neutral-100 mb-4">
//           {"Ready to Transform Your Space?"
//             .split(" ")
//             .map((word, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//                 animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: index * 0.1,
//                   ease: "easeInOut",
//                 }}
//                 className="mr-2 inline-block">
//                 {word}
//               </motion.span>
//             ))}
//         </h1>
  
//       <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mb-6">
//         Upload your space, choose your vibe, and let Gemini AI create stunning interior designs for you.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <button className="rounded-md bg-black px-6 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
//           Start Designing Now
//         </button>
//       </div>
//     </section>
//   );
// }

export function HeroSectionOne() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen w-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-neutral-900"
    >


      <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 dark:text-neutral-100 mb-4">
        {"Ready to Transform Your Space?"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mb-6"
      >
        Upload your space, choose your vibe, and let Gemini AI create stunning
        interior designs for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* <button className="rounded-md bg-black px-6 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
          Start Designing Now
        </button> */}
        <Link
          to="/InputDisplay"
          className="rounded-md bg-black px-6 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Start Designing Now
        </Link>

      </motion.div>
    </motion.section>
  );
}
