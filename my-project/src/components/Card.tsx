import React from "react";
import Image from "next/image";
import rick from "@/img/1.jpeg";

const Card = () => {
  return (
    <div className="container mx-auto w-full h-auto grid grid-cols-4 gap-6">
      <div className="relative border border-gray-300">
        <p className="absolute top-1 left-1 bg-green-700 text-white p-1 rounded-md">
          Alive
        </p>
        <Image src={rick} alt="/" />
        <div className="p-3">
          <h1 className="text-2xl font-bold">Rick Sanchez</h1>
          <p>Human</p>
        </div>
      </div>
      <div className="relative border border-gray-300">
        <p className="absolute top-1 left-1 bg-green-700 text-white p-1 rounded-md">
          Alive
        </p>
        <Image src={rick} alt="/" />
        <div className="p-3">
          <h1 className="text-2xl font-bold">Rick Sanchez</h1>
          <p>Human</p>
        </div>
      </div>
      <div className="relative border border-gray-300">
        <p className="absolute top-1 left-1 bg-green-700 text-white p-1 rounded-md">
          Alive
        </p>
        <Image src={rick} alt="/" />
        <div className="p-3">
          <h1 className="text-2xl font-bold">Rick Sanchez</h1>
          <p>Human</p>
        </div>
      </div>
      <div className="relative border border-gray-300">
        <p className="absolute top-1 left-1 bg-green-700 text-white p-1 rounded-md">
          Alive
        </p>
        <Image src={rick} alt="/" />
        <div className="p-3">
          <h1 className="text-2xl font-bold">Rick Sanchez</h1>
          <p>Human</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
