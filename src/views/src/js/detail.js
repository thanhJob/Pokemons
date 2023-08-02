const pokemonImg = document.getElementById("pokemon");
const urlParams = new URLSearchParams(window.location.search);
const paramsId = urlParams.get("id");
console.log(paramsId);

function start() {
  getData();
}
start();
// GET data
async function getData() {
  try {
    const responseAPI = await fetch(
      `http://localhost:3000/pokemons/${paramsId}`
    );
    const response = await responseAPI.json();
    const data = response.pokemon;

    data.forEach((el) => {
      let divPokemon = document.createElement("div");
      divPokemon.className += "container-pokemons";
      divPokemon.innerHTML = `
      <img src="${el.images}" alt="" class="image-pokemon" />
      <h2>${el.name}</h2>
      <p>${el.description}</p>
      <div class="evolution-pokemon">
        <p>Dòng tiến hóa:</p>
        <p class="name-evolutionPokemon">${el.evolutionName}</p>
        <img src="${el.evolutionImage}" alt="" class="image-evoPokemon" />
      </div>
      `;
      pokemonImg.appendChild(divPokemon);
    });
  } catch (error) {
    console.log(`Err: ${error}`);
  }
}
