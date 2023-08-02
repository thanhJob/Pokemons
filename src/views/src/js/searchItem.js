const pokemonImg = document.getElementById("pokemons");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("name");
let result;

function start() {
  getData();
}
start();
// GET data
async function getData() {
  try {
    const responseAPI = await fetch(
      `http://27.118.27.187/api/pokemons/search?name=${myParam}`
    );
    const response = await responseAPI.json();
    let data = response.pokemon;
    result == data;

    data.forEach((el) => {
      let divPokemon = document.createElement("div");
      divPokemon.className += "pokemon-image";
      divPokemon.innerHTML = `
      <img
        src="${el.images}"
        alt=""
      />
      <p class="pokemon-h2">${el.name}</p>
      <form action="../views/detail.html" method="GET" class="pokemon-btn">
        <input
          name = "id"
          value = "${el.id}" 
        />
        <button>Xem thêm</button>
      </form>
      `;
      pokemonImg.appendChild(divPokemon);
    });
  } catch (error) {
    window.location = "http://27.118.27.187/error.html";
  }
}
