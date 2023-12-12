import { fetchCharacters } from "@/pages/api/api";
import { useEffect, useState } from "react";
import Link from "next/link";

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

function Card(): React.ReactElement {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters().then((response) => {
      setCharacters(response);
      console.log(response);
    });
  }, []);

  return (
    <div className="container mx-auto w-full h-auto grid grid-cols-4 gap-6">
      {characters.map((items) => (
        <Link href={`/character/${items.id}`} key={items.id}>
          <div className="relative border border-gray-300">
            <p
              className={`absolute top-1 left-1 p-1 rounded-md ${
                items.status === "Alive"
                  ? "bg-green-700"
                  : items.status === "Dead"
                  ? "bg-red-700"
                  : "bg-gray-700"
              } text-white`}
            >
              {items.status}
            </p>
            <img src={items.image} alt="imagem dos personagens" />
            <div className="p-3">
              <h1 className="text-2xl font-bold">{items.name}</h1>
              <p>
                {items.status} - {items.species}
              </p>
              <h2 className="text-xl mt-3 text-gray-700">First seen in:</h2>
              <p>{items.location.name}</p>
              <h2 className="text-xl mt-3 text-gray-700">
                Last known location:
              </h2>
              <p>{items.origin.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
