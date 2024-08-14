import { useEffect, useState } from "react";

const PokemonList = () => {
  const [currentList, setCurrentList] = useState({});
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const handleSiguiente = () => {
    setUrl(next);
  };

  const handleAnterior = () => {
    previous && setUrl(previous);
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentList(data);
        setNext(data.next);
        setPrevious(data.previous);
      });
  }, [url]);

  return (
    <div>
      <h1>Lista de Pokemon</h1>
      {currentList.results && (
        <div>
          {currentList.results.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <h2>{pokemon.name}</h2>
              </div>
            );
          })}
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
