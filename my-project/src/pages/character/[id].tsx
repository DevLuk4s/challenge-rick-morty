import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Image from "next/image";

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

function PrevCard() {
  const [characterData, setCharacterData] = useState<CharacterData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        // Obtém o id do personagem da URL
        const { id } = router.query;

        // Se não houver id, não faça a requisição
        if (!id) {
          return;
        }

        // Faz a requisição à API com base no id da URL
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
          // Converte a resposta para JSON
          const data: CharacterData = await response.json();
          
          // Atualiza o estado do componente com os dados recebidos
          setCharacterData(data);
        } else {
          console.error("Erro ao obter dados da API");
        }
      } catch (error) {
        console.error("Erro na requisição à API", error);
      }
    };

    // Chama a função para buscar os dados quando o componente monta ou quando a URL muda
    fetchCharacterData();
  }, [router.query.id]);

  return (
    <>
      <Header />
      <div className="container mx-auto w-full h-screen">
        {characterData && (
          <div className="flex flex-row items-center justify-center gap-5 h-screen w-full">
            <img className="rounded-full" src={characterData.image} alt={characterData.name} />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{characterData.name}</h1>
              <p>{`${characterData.status} - ${characterData.species}`}</p>
              <h2 className="text-xl mt-3 text-gray-700">First seen in:</h2>
              <p>{characterData.origin.name}</p>
              <h2 className="text-xl mt-3 text-gray-700">Last known location:</h2>
              <p>{characterData.location.name}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PrevCard;
