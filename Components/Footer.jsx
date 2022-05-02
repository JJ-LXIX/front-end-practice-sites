import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
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
    <div className=" hidden 2xl:fixed 2xl:flex 2xl:justify-between 2xl:items-center 2xl:w-screen 2xl:max-h-[30vh]  2xl:p-5 2xl:bottom-1 2xl:text-center">
      <motion.h3
        className=" 2xl:w-1/6 2xl:text-lg 2xl:font-bold "
        variants={leftAnim}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      >
        "A non-fungible token (NFT) is a non-interchangeable unit of data stored
        on a blockchain, a form of digital ledger, that can be sold and traded.
        Types of NFT data units may be associated with digital files such as
        photos, videos, and audio."
      </motion.h3>

      <motion.div
        id="  collection_container  "
        className="h-[10rem] flex items-end "
        variants={rightAnim}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      >
        <ul className="hidden 2xl:flex 2xl:flex-col 2xl:space-y-4 2xl:pr-7 ">
          <a href="#one">
            <li className="2xl:text-lg 2xl:font-extrabold hover:scale-110 hover:cursor-pointer hover:text-gray-500  duration-200 ">
              Collection 1
            </li>
          </a>
          <a href="#two">
            <li className="2xl:text-lg 2xl:font-extrabold hover:scale-110 hover:cursor-pointer hover:text-gray-500 duration-200 ">
              Collection 2
            </li>
          </a>
          <a href="#three">
            <li className="2xl:text-lg 2xl:font-extrabold hover:scale-110 hover:cursor-pointer hover:text-gray-500 duration-200 ">
              Collection 3
            </li>
          </a>
          <a href="#four">
            <li className="2xl:text-lg 2xl:font-extrabold hover:scale-110 hover:cursor-pointer hover:text-gray-500 duration-200 ">
              Collection 4
            </li>
          </a>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
