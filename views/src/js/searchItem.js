const pokemonImg = document.getElementById("pokemons");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("name");

function start() {
  getData();
}
start();
// GET data
async function getData() {
  try {
    const responseAPI = await fetch(
      `http://localhost:3000/pokemons/search?name=${myParam}`
    );
    const response = await responseAPI.json();
    const data = response.pokemon;

    data.forEach((el) => {
      let divPokemon = document.createElement("div");
      divPokemon.className += "pokemon-image";
      divPokemon.innerHTML = `
      <img
        src="${el.images}"
        alt=""
      />
      <p class="pokemon-h2">${el.name}</p>
      <form action="/:${el.id}" method="GET" class="pokemon-btn">
        <button>Xem thêm</button>
      </form>
      `;
      pokemonImg.appendChild(divPokemon);
    });
  } catch (error) {
    console.log(`Err: ${error}`);
  }
}
