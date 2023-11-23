import React, { useState, useEffect } from "react";
import { fetchPage } from "@/pages/api/api";
import Card from "@/components/Card";

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

function Load() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const Next = () => {
    setPageNumber(pageNumber + 1);
  };

  const Back = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchPage(pageNumber);
        setCharacters(response.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  return (
    <div>
      <Card characters={characters} loading={loading} />
      <div className="w-full flex justify-center p-3 gap-5">
        {pageNumber > 1 && (
          <button
            onClick={Back}
            className="bg-white text-green-700 border border-green-500 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        )}
        {pageNumber >= 42 || (
          <button
            onClick={Next}
            className="bg-white text-green-700 border border-green-500 font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Load;
