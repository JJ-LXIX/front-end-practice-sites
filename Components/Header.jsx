import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed flex justify-between items-center p-5 w-screen  h-20    z-50 ">
      <Link href="/">
        <h1 className="text-2xl font-extrabold md:text-3xl relative left-3 hover:cursor-pointer">
          NFT Collection
        </h1>
      </Link>

      <h2 className="text-xl  md:text-lg font-semibold relative right-5">
        LXIX
      </h2>
    </div>
  );
};

export default Header;
