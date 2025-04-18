const BASE_URL = "https://pokeapi.co/api/v2/";

let currentPokemon = null;

async function getPokemonByName(name) {
  const pokeData = await fetch(BASE_URL + "pokemon/" + name);
  const pokeJson = await pokeData.json();
  currentPokemon = pokeJson;
}
async function getPokemonById(id) {
  const pokeData = await fetch(BASE_URL + "pokemon/" + id);
  const pokeJson = await pokeData.json();
  currentPokemon = pokeJson;
}

async function displayInfo(pokemon) {
  document.querySelector("p").innerText = pokemon.name;
  document.querySelector("h6").innerText = pokemon.id;
}

document.querySelector("#display").addEventListener("click", async () => {
  await getPokemonByName(document.querySelector("input").value);
  displayInfo(currentPokemon);
});

document.querySelector("#prev").addEventListener("click", async () => {
  if (currentPokemon) {
    await getPokemonById(
      currentPokemon.id === 1 ? 1302 : currentPokemon.id - 1
    );
    currentPokemon && displayInfo(currentPokemon);
  } else {
    return;
  }
});

document.querySelector("#next").addEventListener("click", async () => {
  if (currentPokemon) {
    await getPokemonById(
      currentPokemon.id === 1302 ? 1 : currentPokemon.id + 1
    );
    displayInfo(currentPokemon);
  } else {
    return;
  }
});
