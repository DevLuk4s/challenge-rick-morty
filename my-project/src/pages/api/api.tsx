const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchCharacters = async () => {
  const data = await fetchData("https://rickandmortyapi.com/api/character");
  console.log(data);
  return data.results;
};
