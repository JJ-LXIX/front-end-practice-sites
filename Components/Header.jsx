import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const leftAnim = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const rightAnim = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="fixed flex justify-between items-center p-5 w-screen  h-20    z-50 ">
      <Link href="/">
        <motion.h1
          className="text-2xl font-extrabold md:text-3xl relative left-3 hover:cursor-pointer"
          variants={leftAnim}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, type: "spring" }}
        >
          NFT Collection
        </motion.h1>
      </Link>

      <motion.h2
        className="text-xl  md:text-lg font-semibold relative right-5"
        variants={rightAnim}
        initial="hidden"
        animate="show"
        transition={{ duration: 1, type: "spring" }}
      >
        LXIX
      </motion.h2>
    </div>
  );
};

export default Header;
