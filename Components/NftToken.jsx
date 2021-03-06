import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NftToken = ({ imageName, title, description, bgColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-96 h-[38rem] ${bgColor} rounded-2xl flex flex-col justify-around pt-2 items-center shadow-[0_20px_20px_15px_rgba(0,0,0,0.3)] `}
    >
      <Image
        src={`/assets/${imageName}`}
        alt="nft collection"
        width="320"
        height="350"
        className="rounded-lg"
      />
      <div className="flex  flex-col p-3 text-center justify-around space-y-4 items-center">
        <h2 className="text-3xl font-extrabold">"{title}"</h2>
        <h3 className=" font-bold text-gray-900 text-opacity-90">
          {description}
        </h3>
      </div>
    </motion.div>
  );
};

export default NftToken;
