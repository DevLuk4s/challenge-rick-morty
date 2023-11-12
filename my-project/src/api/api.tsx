const fetchCharacter = async (query:string, page:number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${query}?page=${page}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};

export default fetchCharacter;
