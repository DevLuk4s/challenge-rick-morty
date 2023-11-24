import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

function PrevCard() {
  const [characterData, setCharacterData] = useState<CharacterData | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const { id } = router.query;

        if (!id) {
          return;
        }

        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        if (response.ok) {
          const data: CharacterData = await response.json();

          setCharacterData(data);
        } else {
          console.error("Erro ao obter dados da API");
        }
      } catch (error) {
        console.error("Erro na requisição à API", error);
      }
    };

    fetchCharacterData();
  }, [router.query.id]);

  return (
    <>
      <Header />
      <div className="container mx-auto w-full h-screen">
        <Link href={"/"}>
          <IoMdArrowRoundBack />
        </Link>
        {characterData && (
          <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-center">
                {characterData.name}
              </h1>
              <img src={characterData.image} alt={characterData.name} />
              <p>
                <strong>Status:</strong> {`${characterData.status}`}
              </p>
              <p>
                <strong>Gender:</strong> {`${characterData.gender}`}
              </p>
              <p>
                <strong>Species:</strong> {`${characterData.species}`}
              </p>
              <p>
                <strong>Origin:</strong> {characterData.origin.name}
              </p>
              <p>
                <strong>Location:</strong> {characterData.location.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PrevCard;
