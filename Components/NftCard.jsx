import React from "react";
import NftToken from "./NftToken";
import "../public/assets/MoonBird.png";

import { motion, useViewportScroll, useTransform } from "framer-motion";

const NftCard = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const backgroundFramer = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 0.9],
    ["#ffb579", "#97ff6e", "#fffc44", "#24bdff"]
  );

  return (
    <div className="snap-y snap-mandatory   overflow-x-hidden ">
      <motion.div style={{ backgroundColor: backgroundFramer }}>
        <motion.div
          className="flex justify-center items-center h-[101vh] w-screen snap-start  1"
          id="one"
          transition={{ delay: 0.5 }}
        >
          <NftToken
            imageName="cPunk.png"
            title="Crypto_Punks"
            description="The project was launched in June 2017 by the Larva Labs studio, a two-person team consisting of Canadian software developers Matt Hall and John Watkinson."
            // bgColor="bg-gradient-to-b from-[#c97a39] to-[#e6ad65]"
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center h-[100vh] w-screen snap-start 2"
          id="two"
        >
          <NftToken
            imageName="MoonBird.png"
            title="Moon_Birds"
            description="They're a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them."
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center h-[100vh] w-screen  snap-start 3"
          id="three"
        >
          <NftToken
            imageName="boredApe.png"
            title="Bored_Ape_Yacht_Club"
            description="The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits."
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center h-[101vh] w-screen snap-start 4"
          id="four"
        >
          <NftToken
            imageName="murakami.png"
            title="CLONE_X"
            description="20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸 CLONE X Corp was founded by three extraterrestrials who came from the planet of Orbitar in the Draco constellation. They plan to transfer all human consciousness into advanced clone forms to create the ultimate Metaverse."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NftCard;
