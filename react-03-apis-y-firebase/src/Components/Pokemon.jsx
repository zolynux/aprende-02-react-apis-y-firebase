const Pokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/1").then((resp) => {
    console.log(resp);
  });

  return <div>Pokemon</div>;
};

export default Pokemon;
