const pokemonSprite = document.querySelector("#pokemon_sprite");

function fetchPokemon() {
  const pokemonName = document
    .querySelector("#pokemon_name")
    .value.toLowerCase();
  const pokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  pokemonData
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch the pokemon");
      }
      return response.json();
    })
    .then((data) => {
      pokemonSprite.src = data.sprites.front_default;
      pokemonSprite.style.display = "block";
    })
    .catch((error) => console.error(error));
}
