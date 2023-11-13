async function fetchPokemon(name: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    if (!response.ok) {
      console.error(`Error: HTTP status ${response.status}`);
      return null;
    }

    const data = await response.json();

    const pokemonInfo = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
    };

    return pokemonInfo;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

export default fetchPokemon;
