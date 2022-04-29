import React from "react";
import NftToken from "./NftToken";
import "../public/assets/MoonBird.png";

const NftCard = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden z-0">
      <div
        className="w-screen h-screen justify-center items-center bg-gradient-to-b from-[#e7893e] to-[#ffb579] snap-start "
        id="one"
      >
        <NftToken
          imageName="cPunk.png"
          title="Crypto_Punks"
          description="The project was launched in June 2017 by the Larva Labs studio, a two-person team consisting of Canadian software developers Matt Hall and John Watkinson."
          bgColor="bg-gradient-to-b from-[#c97a39] to-[#e6ad65]"
        />
      </div>
      <div
        className="w-screen h-screen bg-gradient-to-b from-[#68b649] to to-[#97ff6e] snap-start"
        id="two"
      >
        <NftToken
          imageName="MoonBird.png"
          title="Moon_Birds"
          description="They're a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them."
          bgColor="bg=[#d9ffc2]"
        />
      </div>
      <div
        className="w-screen h-screen justify-center items-center bg-gradient-to-b from-[#e7e69e] to to-[#fffc44] snap-start"
        id="three"
      >
        <NftToken
          imageName="boredApe.png"
          title="Bored_Ape_Yacht_Club"
          description="The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits."
          className="bg-[#332042]"
        />
      </div>
      <div
        className="w-screen h-screen justify-center items-center bg-gradient-to-b from-blue-500 to-blue-300 snap-start"
        id="four"
      >
        <NftToken
          imageName="murakami.png"
          title="CLONE_X"
          description="20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸 CLONE X Corp was founded by three extraterrestrials who came from the planet of Orbitar in the Draco constellation. They plan to transfer all human consciousness into advanced clone forms to create the ultimate Metaverse."
        />
      </div>
    </div>
  );
};

export default NftCard;
