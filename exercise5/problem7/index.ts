type Pokemon = {
  id: number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default: string;
  };
};

async function fetchPokemons(pokemons: string[]) {
  try {
    const result = [];
    for (const pokemon: string of pokemons) {
      const pokemonObject = await fetchPokemon(pokemon);
      result.push(pokemonObject);
    }

    }

    return result;

  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

async function fetchPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);

    if (!response.ok) {
      //console.error(`Error: HTTP status ${response.status}`);
      await Promise.reject(new Error("some error"));
    }

    const json: Pokemon = await response.json();

    return {
      id: json.id,
      name: json.name,
      height: json.height,
      weight: json.weight,
      image: json.sprites.front_default,
    };
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchPokemons;
