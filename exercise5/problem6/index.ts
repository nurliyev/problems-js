type Pokemon = {
  id: number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default: string;
  };
};

async function fetchPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);

    if (!response.ok) {
      //console.error(`Error: HTTP status ${response.status}`);
      await Promise.reject(new Error());
    }

    // const data = await response.json();

    // const pokemonInfo = {
    //   id: data.id,
    //   name: data.name,
    //   height: data.height,
    //   weight: data.weight,
    //   image: data.sprites.front_default,
    // };
    // return pokemonInfo;

    const json: Pokemon = await response.json();
    return {
      id: json.id,
      name: json.name,
      height: json.height,
      weight: json.weight,
      sprites: json.sprites.front_default,
    };
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchPokemon;
