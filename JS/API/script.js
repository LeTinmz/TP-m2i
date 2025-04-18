const BASE_URL = "https://pokeapi.co/api/v2/";

let currentPokemon = null;
window.onload = document.querySelector("input").value = "";
async function getPokemonByName(identifier) {
  const pokeData = await fetch(BASE_URL + "pokemon/" + identifier);
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
  document.querySelector("h4").innerText = pokemon.weight;
  document.querySelector("h5").innerText = pokemon.height;
}

document.querySelector("#display").addEventListener("click", async () => {
  await getPokemonByName(document.querySelector("input").value);
  displayInfo(currentPokemon);
});

document.querySelector("#prev").addEventListener("click", async () => {
  if (currentPokemon) {
    await getPokemonById(
      currentPokemon.id === 1 ? 1025 : currentPokemon.id - 1
    );
    currentPokemon && displayInfo(currentPokemon);
  } else {
    return;
  }
});

document.querySelector("#next").addEventListener("click", async () => {
  if (currentPokemon) {
    await getPokemonById(
      currentPokemon.id === 1025 ? 1 : currentPokemon.id + 1
    );
    displayInfo(currentPokemon);
  } else {
    return;
  }
});
