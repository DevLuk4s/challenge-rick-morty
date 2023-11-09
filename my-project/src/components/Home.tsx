import React from "react";
import Image from "next/image";
import banner from "../img/banner.png";

function Home() {
  return (
    <div className="flex justify-center w-full h-64">
      <Image
        className="w-full max-w-[700px]"
        src={banner}
        alt="banner da serie"
      />
    </div>
  );
}

export default Home;
