import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  const handleAnterior = () => {
    // if (id > 1) {
    //   setId(id - 1);
    // }
    id > 1 && setId(id - 1);
  };

  const handleSiguiente = () => {
    setId(id + 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <>
      {pokemon && (
        <div>
          <p>ID: {pokemon.id}</p>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br />
          {id > 1 ? (
            <button onClick={handleAnterior}>Anterior</button>
          ) : (
            <button disabled>Anterior</button>
          )}
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </>
  );
};

export default Pokemon;
