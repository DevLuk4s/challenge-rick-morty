import React, { useEffect, useState } from "react";
import fetchCharacter from "@/api/api";

type Character = {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  gender: string;
  origin: Origin;
  location: Location;
};

type Location = {
  name: string;
};

type Origin = {
  name: string;
};

type CardProps = {
  page: number;
};

const Card: React.FC<CardProps> = ({ page }) => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter("character", page).then((response) => {
      setCharacter((prevCards) => [...prevCards, ...response]);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container mx-auto w-full h-auto grid grid-cols-4 gap-6">
      {character.map((item) => (
        <div key={item.id} className="relative border border-gray-300">
          <p
            className={`absolute top-1 left-1 p-1 rounded-md ${
              item.status === "Alive"
                ? "bg-green-700"
                : item.status === "Dead"
                ? "bg-red-700"
                : "bg-gray-700"
            } text-white`}
          >
            {item.status}
          </p>
          <img src={item.image} alt="imagem dos personagens" />
          <div className="p-3">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p>
              {item.status} - {item.species}
            </p>
            <h2 className="text-xl mt-3 text-gray-700">First seen in:</h2>
            <p>{item.location.name}</p>
            <h2 className="text-xl mt-3 text-gray-700">Last known location:</h2>
            <p>{item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
