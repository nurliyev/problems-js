type nameofActor = {
  name: number;
  films: {
    string;
  };
};

async function fetchCharacterWithMovies(name: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/${name}`);

    if (!response.ok) {
      //console.error(`Error: HTTP status ${response.status}`);
      await Promise.reject(new Error("some error"));
    }

    const json: nameofActor = await response.json();

    return {
      name: json.name,
      films: json.films,
    };
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchCharacterWithMovies;
