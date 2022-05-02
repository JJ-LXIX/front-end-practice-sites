import Head from "next/head";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NftCard from "../Components/NftCard";

export default function Home() {
  return (
    <div className="scroll-smooth font-inconsolata">
      <Head>
        <title>NFT Showcase</title>
        <meta
          name="description"
          content="Showcasing the top NFT collections!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* NFT Card */}

      <NftCard />

      {/* Footer */}
      <Footer />
    </div>
  );
}
