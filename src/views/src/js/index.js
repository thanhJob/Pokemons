const pokemonImg = document.getElementById("pokemons");

function start() {
  getData();
}
start();
// GET data
async function getData() {
  try {
    const responseAPI = await fetch("http://localhost:3000/pokemons");
    const response = await responseAPI.json();
    const data = response.pokemons;
    console.log(data);
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
        <button >Xem thêm</button>
      </form>
      `;
      pokemonImg.appendChild(divPokemon);
    });
  } catch (error) {
    console.log(`Err: ${error}`);
  }
}
