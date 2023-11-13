import React from "react";
import { useEffect, useState } from "react";
import fetchCharacter from "@/api/api";

type Character = {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  origin: string;
  gender: string;
};

type CardProps = {
  page: number;
};

export default function Card({ page }) {
  const [character, setCharacter] = useState<Character[]>([]);
  const [status, setStatus] = useState("alive");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter("character", page).then((response) => {
      setCharacter(response);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto w-full h-auto grid grid-cols-4 gap-6">
      {character.map((item, index) => (
        <div key={index} className="relative border border-gray-300">
          <p className="absolute top-1 left-1 bg-green-700 text-white p-1 rounded-md">
            {status}
          </p>
          <img src={item.image} />
          <div className="p-3">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p>{item.status} - {item.species} - {item.gender}</p>
            <p>Last known location:</p>
            <p>{item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
