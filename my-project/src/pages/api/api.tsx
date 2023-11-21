const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchCharacters = async () => {
  return fetchData("https://rickandmortyapi.com/api/character");
};

export const fetchLocations = async () => {
  return fetchData("https://rickandmortyapi.com/api/location");
};

export const fetchEpisodes = async () => {
  return fetchData("https://rickandmortyapi.com/api/episode");
};

export const fetchPage = async (page: number) => {
  return fetchData(`https://rickandmortyapi.com/api/character/?page=${page}`);
};
